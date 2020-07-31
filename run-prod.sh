#!/bin/bash
source .env;
docker network create --driver bridge router_router || true;
cat .token | docker login https://docker.pkg.github.com -u $GITHUB_USER --password-stdin;

# Split the pull/recreate step because otherwise we run out of memory
docker-compose -f docker/prod.yml pull backend;
docker-compose -f docker/prod.yml up -d backend;

docker-compose -f docker/prod.yml pull frontend;
docker-compose -f docker/prod.yml up -d frontend;
# Certbot stuff is a little funky right now so let's shelve that
docker-compose -f docker/router-prod.yml run certbot renew;
