FROM nginx:latest

RUN rm /etc/nginx/conf.d/*

COPY nginx /etc/nginx

RUN mkdir /etc/nginx/sites-enabled

COPY scripts/ /scripts

CMD ["/scripts/run-router.sh"]
