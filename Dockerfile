FROM nginx:1.15
COPY dist/basket-front-public /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
