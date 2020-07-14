FROM node:12.18.1

WORKDIR /temp

COPY package*.json /temp

RUN npm install

RUN npm run build

WORKDIR /app

RUN cp /temp/build . \
&& rm -rf /temp

RUN npm install -g serve

CMD ["serve",  "-s",  "build", "-p", "80"]
