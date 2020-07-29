#!/bin/bash
source .env;
docker network create --driver bridge router_router || true;
cat .token | docker login https://docker.pkg.github.com -u $GITHUB_USER --password-stdin;
docker-compose -f docker/prod.yml pull;
docker-compose -f docker/prod.yml up -d;
docker-compose -f docker/router-prod.yml run certbot renew;
