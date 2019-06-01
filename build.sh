
read -p "请git信息:" name

npm run build
git add .
git commit -m '$name'
git push origin master
