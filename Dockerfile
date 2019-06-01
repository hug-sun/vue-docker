FROM nginx:latest
ADD ./dist /var/www/html
ADD ./nginx/conf.d /etc/nginx/conf.d
EXPOSE 80