FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install -g serve

CMD ["serve",  "-s",  "build", "-p", "80"]
