import os

CONSTANTS = {
    'PORT': os.environ.get('FLASK_RUN_PORT', 3001),
    'HTTP_STATUS': {
        '404_NOT_FOUND': 404,
    },
    'DB_HOST': os.environ.get('DB_HOST'),
    'DB_PORT': os.environ.get('DB_PORT'),
    'DB_USERNAME': os.environ.get('DB_USERNAME'),
    'DB_PASSWORD': os.environ.get('DB_PASSWORD'),
    'ENV': os.environ.get('FLASK_ENV'),

}
