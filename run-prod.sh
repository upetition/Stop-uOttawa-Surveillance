#!/bin/bash

docker-compose -f docker/docker-compose.yml -f docker/prod.yml up frontend router backend
