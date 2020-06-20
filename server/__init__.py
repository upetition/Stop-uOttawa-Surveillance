from flask import Flask
from server.constants import CONSTANTS
from server.controllers.abc import DatabaseDriver
from server.controller.mongo import MongoDriver
import logging

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__, static_folder='build')
db: DatabaseDriver = None

if CONSTANTS['ENV'] == 'development':
    logging.debug('Development environment, using Mongo driver.')
    logging.warning('Do not use this in production')
    db = MongoDriver(
        app,
        CONSTANTS['DB_HOST'],
        CONSTANTS['DB_PORT'],
        CONSTANTS['DB_USERNAME'],
        CONSTANTS['DB_PASSWORD']
    )
