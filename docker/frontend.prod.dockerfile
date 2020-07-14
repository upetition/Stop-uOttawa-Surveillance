FROM node:12.18.1

RUN npm install -g serve

WORKDIR /temp

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

WORKDIR /app

RUN cp -r /temp/build . \
&& rm -rf /temp

CMD ["serve",  "-s",  "build", "-p", "80"]
