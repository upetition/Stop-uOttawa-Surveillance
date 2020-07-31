#!/bin/bash
source .env;

if [ $(docker ps -f name=blue -q) ];
then
    ENV="green";
    OLD="blue";
else
    ENV="blue";
    OLD="green";
fi

docker network create --driver bridge router_router || true;
cat .token | docker login https://docker.pkg.github.com -u $GITHUB_USER --password-stdin;

# Split the pull/recreate step because otherwise we run out of memory
echo "Pulling new backend container...";
docker-compose -f docker/prod.yml pull backend;
echo "Starting up new container in the '$ENV' namespace";
docker-compose -f docker/prod.yml --project-name=$ENV up -d backend;
sleep 5s;
echo "Shutting down $OLD backend...";
docker-compose -f docker/prod.yml --project-name=$OLD stop backend;
echo "Done!";

echo "Pulling new frontend container...";
docker-compose -f docker/prod.yml pull frontend;
echo "Starting up new container in the '$ENV' namespace"
docker-compose -f docker/prod.yml --project-name=$ENV up -d frontend;
sleep 5s;
echo "Shutting down $OLD frontend...";
docker-compose -f docker/prod.yml --project-name=$OLD stop frontend;
echo "Done!";

echo "Attempting to refresh the certificates...";
docker-compose -f docker/router-prod.yml run certbot renew;
