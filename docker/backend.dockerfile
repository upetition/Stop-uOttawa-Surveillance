FROM python:3.8-slim-buster

WORKDIR /app

COPY . /app

COPY ./run-backend.sh /app/run-backend.sh

RUN pip install -r requirements.txt .

CMD './run-backend.sh'
