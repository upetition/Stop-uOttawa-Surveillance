from flask import Flask
from server.constants import CONSTANTS
from server.controllers.abc import (
    DatabaseDriver,
    EmailDriver
)
from server.controllers.mongo import MongoDriver
from server.controllers.firestore import FirestoreDriver
from server.controllers.mailgun import MailgunDriver
import logging
import os

logging.basicConfig(
    format=f"[%(asctime)s] [{os.getpid()}] [%(levelname)s] - %(name)s - %(message)s",
    level=logging.DEBUG,
    datefmt='%Y/%m/%d %H:%M:%S %z')

logger = logging.getLogger(__file__)
app = Flask(__name__, static_folder='build')

db: DatabaseDriver = None
mail: EmailDriver = None

if CONSTANTS['DB_TYPE'] == 'mongo':
    logger.warning('DB type is local, using Mongo driver.')
    logger.warning('Do not use this in production!!')
    db = MongoDriver(
        app,
        CONSTANTS['DB_HOST'],
        CONSTANTS['DB_PORT'],
        CONSTANTS['DB_USERNAME'],
        CONSTANTS['DB_PASSWORD']
    )

if CONSTANTS['DB_TYPE'] == 'firestore':
    db = FirestoreDriver(
        CONSTANTS['DB_USERNAME'],
        CONSTANTS['DB_PASSWORD']
    )


if CONSTANTS['MAIL_PROVIDER'] == 'mailgun':
    mail = MailgunDriver(
        CONSTANTS['MAIL_API_KEY'],
        CONSTANTS['DOMAIN']
    )
