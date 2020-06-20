from flask import (
    jsonify,
    make_response,
    send_from_directory
)
from os.path import exists, join

from server import (  # noqa: F401
    app,
    db
)
from server.constants import CONSTANTS
import logging  # noqa: F401


# Catching all routes
# This route is used to serve all the routes in the frontend application after deployment.
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    file_to_serve = path if path and exists(join(app.static_folder, path)) else 'index.html'
    return send_from_directory(app.static_folder, file_to_serve)


# Route to get the text copy of a page
@app.route('/copy/<page:str>')
def get_copy_for(page):
    '''
    Route to get the text copy of a page
    '''
    pass


@app.route('/add/student')
def add_student():
    '''
    Extracts the name, student number, and uottawa email from the request body
    and adds it to the database. Also triggers a job to send the confirmation email
    to the student to verify that they are actually a uottawa student
    '''
    breakpoint()


@app.route('/verify/<id:str>')
def verify_student(id):
    '''
    Uses the ID that was sent to the student's email to set them as confirmed
    in the database.
    '''


@app.route('/delete/<student_number:int>')
def delete_student(student_number):
    '''
    Uses the student number to trigger the deletion process for a student from the database.
    '''


@app.route('/count/verified')
def count_verified():
    '''
    Get the total number of verified petition signers
    '''


# Error Handler
@app.errorhandler(404)
def page_not_found(error):
    json_response = jsonify({'error': 'Page not found'})
    return make_response(json_response, CONSTANTS['HTTP_STATUS']['404_NOT_FOUND'])


if __name__ == '__main__':
    app.run(port=CONSTANTS['PORT'])
