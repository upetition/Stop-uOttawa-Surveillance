FROM python:3.8-slim-buster

WORKDIR /app

COPY ./server /app/server

COPY setup.cfg /app

COPY setup.py /app

COPY ./run-backend.sh /app

COPY requirements.txt /app

RUN pip install -r requirements.txt .

CMD ["./run-backend.sh"]
