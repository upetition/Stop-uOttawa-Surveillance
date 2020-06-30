import os

CONSTANTS = {
    'PORT': os.environ.get('FLASK_RUN_PORT', 3001),
    'HTTP_STATUS': {
        '404_NOT_FOUND': 404,
    },
    'DB_HOST': os.environ.get('DB_HOST', ''),
    'DB_PORT': os.environ.get('DB_PORT', ''),
    'DB_USERNAME': os.environ.get('DB_USERNAME', None),
    'DB_PASSWORD': os.environ.get('DB_PASSWORD', None),
    'ENV': os.environ.get('FLASK_ENV'),
    'DB_TYPE': os.environ.get('DB_TYPE', ''),
    'MAIL_PROVIDER': os.environ.get('MAIL_PROVIDER', ''),
    'MAIL_API_KEY': os.environ.get('MAIL_API_KEY', ''),
    'DOMAIN': os.environ.get('DOMAIN'),
    'KEY': os.environ.get('SECRET_KEY'),
    'SOCIAL_PLATFORM': os.environ.get('SOCIAL_PLATFORM', None),
    'SOCIAL_API_URL': os.environ.get('SOCIAL_API_URL', None),
    'MAINTAINER_EMAIL': os.environ.get('MAINTAINER_EMAIL', None),
}
