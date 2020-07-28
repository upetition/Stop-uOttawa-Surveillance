#!/bin/bash

if [ "$ENV" == "production" ]; then
    cp /etc/nginx/sites-available/prod.conf /etc/nginx/sites-enabled/prod.conf;
else
    cp /etc/nginx/sites-available/dev.conf /etc/nginx/sites-enabled/dev.conf;
fi

nginx -g "daemon off;";
