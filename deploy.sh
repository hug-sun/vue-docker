#docker build -t kkb-frontend git@github.com:kkbjs/vue-docker.git
# dist包在git李
git pull
docker build -t kkb-frontend-image .
docker stop kkb-frontend-container
docker rm kkb-frontend-container
docker run -p 7001:80 -d --name kkb-frontend-container kkb-frontend-image 
