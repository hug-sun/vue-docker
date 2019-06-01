
read -p "请输入用户名称:" name
echo -e "\n"
echo "用户名为:$name"

npm run build
git add .
git commit -m 'fix'
git push origin master
