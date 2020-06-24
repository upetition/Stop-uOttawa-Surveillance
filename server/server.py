from bson import ObjectId
from flask import (
    jsonify,
    make_response,
    request,
    send_from_directory
)
from os.path import exists, join

from server import (  # noqa: F401
    app,
    db
)
from server.constants import CONSTANTS
import logging  # noqa: F401
import re


# Catching all routes
# This route is used to serve all the routes in the frontend application after deployment.
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    file_to_serve = path if path and exists(join(app.static_folder, path)) else 'index.html'
    return send_from_directory(app.static_folder, file_to_serve)


# Route to get the text copy of a page
@app.route('/copy/<string:page>')
def get_copy_for(page):
    '''
    Route to get the text copy of a page
    '''
    logging.info('Hit route %s', request.path)
    pass


@app.route('/add/student', methods=['POST'])
def add_student():
    '''
    Extracts the name, student number, and uottawa email from the request body
    and adds it to the database. Also triggers a job to send the confirmation email
    to the student to verify that they are actually a uottawa student
    '''
    logging.info('Hit route %s', request.path)
    data = request.get_json()

    student_email = data['student_email']

    if not re.search('@uottawa.ca$', student_email):
        error = jsonify({'error': 'Email must be a university of ottawa email', 'created': False})
        return make_response(error, 400)

    student_name = data['student_name']

    try:
        student_number = int(data['student_number'])
    except Exception:
        error = jsonify({'error': 'Student number must be a number', 'created': False})
        return make_response(error, 400)

    student_data = {
        'name': student_name,
        'student_number': student_number,
        'email': student_email,
        'verified': False
    }

    _id = db.add(student_data)

    logging.debug(
        'Added student to petition. data=%s',
        student_data
    )

    return jsonify({'added_id': str(_id)})


@app.route('/verify/<string:_id>')
def verify_student(_id):
    '''
    Uses the ID that was sent to the student's email to set them as confirmed
    in the database.
    '''
    logging.info('Hit route %s', request.path)
    try:
        obj_id = ObjectId(_id)
    except Exception:
        error = jsonify({'error': 'A problem has occurred with the id', 'verified': False})
        return make_response(error, 400)

    updated = db.update({'_id': obj_id}, {'verified': True})

    if updated:
        return jsonify({'msg': 'User verified successfully', 'verified': True})

    error = jsonify({'error': 'User was not verified', 'verified': False})

    return make_response(error, 400)


@app.route('/delete/<int:student_number>')
def delete_student(student_number):
    '''
    Uses the student number to trigger the deletion process for a student from the database.
    '''
    logging.info('Hit route %s', request.path)
    logging.debug('Deleting student with student number %d', student_number)
    db.delete({'student_number': student_number})


@app.route('/count/verified')
def count_verified():
    '''
    Get the total number of verified petition signers
    '''
    logging.info('Hit route %s', request.path)

    count = db.count_records({'verified': True})

    return jsonify({'verified_count': count})


# Error Handler
@app.errorhandler(404)
def page_not_found(error):
    logging.info('Hit route %s', request.path)
    logging.warning('Route does not exist')
    json_response = jsonify({'error': 'Page not found'})
    return make_response(json_response, CONSTANTS['HTTP_STATUS']['404_NOT_FOUND'])


if __name__ == '__main__':
    app.run(port=CONSTANTS['PORT'])
