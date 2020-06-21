#!/bin/bash

gunicorn --bind "$FLASK_RUN_HOST:$FLASK_RUN_PORT" --worker-connections 2 --threads 4 --reload server.wsgi:application
