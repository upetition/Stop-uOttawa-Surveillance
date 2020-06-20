FROM ubuntu:latest

WORKDIR /app

COPY install .
COPY requirements.txt .
COPY test-requirements.txt .

RUN ./install
