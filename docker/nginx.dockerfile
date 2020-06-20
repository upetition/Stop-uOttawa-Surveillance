from nginx:latest

RUN rm /etc/nginx/conf.d/*

COPY nginx /etc/nginx

RUN mkdir /etc/nginx/sites-enabled

RUN cp /etc/nginx/sites-available/* /etc/nginx/sites-enabled/

CMD ["nginx", "-g", "daemon off;"]
