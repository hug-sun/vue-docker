#docker build -t kkb-frontend git@github.com:kkbjs/vue-docker.git
git pull
docker build -t kkb-frontend .
docker stop kkb-frontend
docker rm kkb-frontend
docker run -p 7001:80 -d --name kkb-frontend kkb-frontend 
