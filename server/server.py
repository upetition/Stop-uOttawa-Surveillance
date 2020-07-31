from flask import (
    jsonify,
    make_response,
    request,
    send_from_directory
)
from flask_json_schema import JsonValidationError
from os.path import exists, join

from server import (  # noqa: F401
    app,
    crypto,
    db,
    mail,
    schema,
    social
)
from server.constants import CONSTANTS
from server.utils import (
    int_to_bytes,
)
import logging  # noqa: F401
import re
import hashlib


logger = logging.getLogger(__file__)


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
    logger.info('Hit route %s', request.path)
    pass


@app.route('/add/student', methods=['POST'])
def add_student():
    '''
    Extracts the name, student number, and uottawa email from the request body
    and adds it to the database. Also triggers a job to send the confirmation email
    to the student to verify that they are actually a uottawa student
    '''
    logger.info('Hit route %s', request.path)
    data = request.get_json()

    student_email = data['student_email']

    if not re.search('@uottawa.ca$', student_email):
        error = jsonify({'error': 'Email must be a university of ottawa email', 'created': False})
        return make_response(error, 400)

    student_name = data['student_name']

    if re.search('anonymous', student_name):
        error = jsonify({'error': 'Anonymous is not a valid name', 'created': False})
        return make_response(error, 400)

    try:
        student_number = int(data['student_number'])
    except Exception:
        error = jsonify({'error': 'Student number must be a number', 'created': False})
        return make_response(error, 400)

    if not (1_000_000 <= student_number <= 9_999_999_999):
        error = jsonify({'error': 'Student number is not valid', 'created': False})
        return make_response(error, 400)

    bytes_student_name = student_name.encode('utf-8')
    bytes_student_email = student_email.encode('utf-8')
    bytes_student_number = int_to_bytes(student_number)

    hash_name = hashlib.sha512(bytes_student_name).digest()
    hash_email = hashlib.sha512(bytes_student_email).digest()
    hash_number = hashlib.sha512(bytes_student_number).digest()

    student_data = {
        'name': crypto.encrypt(bytes_student_name),
        'student_number': crypto.encrypt(bytes_student_number),
        'email': crypto.encrypt(bytes_student_email),
        'hash_name': hash_name,
        'hash_email': hash_email,
        'hash_number': hash_number,
        'verified': False
    }

    _id = db.add_student(student_data)

    if _id is None:
        error = jsonify({
            'error': 'This email or student number has already been used to sign the petition',
            'created': False
        })
        return make_response(error, 400)

    logger.debug(
        'Added student to petition. data=%s',
        student_data
    )

    result = mail.send_validation_mail(student_name, student_email, str(_id))
    logger.debug(result)

    return jsonify({'created': True})


@app.route('/verify/<string:_id>', methods=['POST'])
def verify_student(_id):
    '''
    Uses the ID that was sent to the student's email to set them as confirmed
    in the database.
    '''
    logger.info('Hit route %s', request.path)
    updated = db.set_student_verified(_id)

    if updated:
        return jsonify({'msg': 'User verified successfully', 'verified': True})

    error = jsonify({'error': 'User was not verified', 'verified': False})

    return make_response(error, 400)


@app.route('/delete/<int:student_number>')
def delete_student(student_number):
    '''
    Uses the student number to trigger the deletion process for a student from the database.
    '''
    logger.info('Hit route %s', request.path)
    logger.debug('Deleting student with student number %d', student_number)
    db.delete({'student_number': student_number})


@app.route('/contact', methods=["POST"])
@schema.validate({
    'properties': {
        'name': {
            'type': 'string'
        },
        'email': {
            'type': 'string',
            'format': 'email'
        },
        'comment': {
            'type': 'string',
            'maxLength': 1000
        }
    },
    'required': ['name', 'email', 'comment']
})
def contact_us():
    '''
    Grabs the name & email & comment from the request body and sends it
    to the maintainer email. If successfully sent, it then posts a well-structured
    message to the discord channel with the webhook (if configured).
    '''
    logger.info('Hit route %s', request.path)
    data = request.get_json()
    name = data['name']
    email = data['email']
    comment = data['comment']
    response = mail.send_contact_mail(name, email, comment)

    status_ok = 200 <= response.status_code < 300
    if status_ok and social:
        social.post_comment(comment, name=name, email=email)

    logger.debug('Email post status %s', status_ok)

    return jsonify({'success': status_ok})


@app.route('/count/verified')
def count_verified():
    '''
    Get the total number of verified petition signers
    '''
    logger.info('Hit route %s', request.path)

    count = db.count_records({'verified': True})

    return jsonify({'verified_count': count})


@app.route('/testimonial/submit', methods=['POST'])
@schema.validate({
    'properties': {
        'name': {'type': 'string'},
        'program': {'type': 'string'},
        'year': {'type': 'string'},
        'testimonial': {'type': 'string', 'maxLength': 1500},
        'anonymous': {'type': 'boolean'}
    },
    'required': ['name', 'student_number', 'program', 'year', 'testimonial']
})
def submit_testimonial():
    '''
    Submit a testimonial to be approved by the team
    '''
    logger.info('Hit route %s', request.path)

    data = request.get_json()

    logger.debug(data)

    name = ''

    if data['anonymous'] is True:
        name = 'Anonymous'
    else:
        name = data['name'].capitalize().split(' ')[0]

    testimonial = {
        'name': name,
        'program': data['program'],
        'year': data['year'],
        'testimonial': data['testimonial'],
        'verified': False
    }

    logging.info("Attempting to insert testimonial with data %s" % testimonial)

    _id = db.add_testimonial(testimonial)

    if _id is None:
        logging.info('Failed to submit testimonial %s' % testimonial)
        error = jsonify({'error': 'Could not submit testimonial', 'success': False})
        return make_response(error, 400)

    if social is not None:
        logging.info('Posting testimonial to Discord')
        social.post_testimonial(
            name=name,
            program=data['program'],
            year=data['year'],
            testimonial=data['testimonial'],
            id_str=_id
        )

    logging.info('Creation of testimonial was successful')
    return jsonify({'success': True})


@app.route('/testimonials')
def get_testimonials():
    logger.info('Hit route %s', request.path)
    try:
        data = db.get_testimonials()
    except Exception:
        return jsonify({'success': False, 'error': 'Could not retrieve testimonials'})

    return jsonify({'success': True, 'testimonials': data})


@app.errorhandler(JsonValidationError)
def validation_error(e):
    logger.debug(e)
    return make_response(
        jsonify({
            'error': 'Problem validating data',
            'errors': [validation_error.message for validation_error in e.errors]
        }),
        400
    )


# Error Handler
@app.errorhandler(404)
def page_not_found(error):
    logger.info('Hit route %s', request.path)
    logger.warning('Route does not exist')
    json_response = jsonify({'error': 'Page not found'})
    return make_response(json_response, CONSTANTS['HTTP_STATUS']['404_NOT_FOUND'])


if __name__ == '__main__':
    app.run(port=CONSTANTS['PORT'])
