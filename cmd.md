# 项目命令
##1.安装express生成器
> npm install express-generator -g

##2.生成项目
> npm install -e todolist

##3.安装bower命令行工具
> npm install -g bower
>一定要注意bower要安装在全局下。

##4.初始化bower配置文件
> bower init

##5.在项目下添加配置文件 .bowerrc
{"directory":"./public/lib"}
> 如果没有此配置项，则安装到bower_components目录下
> 注意文件名不能错，只能是.bowerrc

##6.依次安装前端框架
> bower install jquery --save

> bower install angular --save

> bower install bootstrap --save

>加--save的作用是把这个库添加到bower.json配置文件中的dependencies中，这样别人下载下来仓库的时候，只需要执行bower install 即可加载所有的依赖。
>如果报git的错误可能是因为在安装git的时候选择了第一项，也就只能在gitbash中使用git命令，可以重新安装git，并选择第三项，可以在命令行下使用git

##7.初始化git仓库
```
> git init
```

##8.添加并提交代码并推送到远程仓库
```
git add -A
git commit -m"init"
git remote add origin 远程仓库
git push -u origin master
```

##9.安装mongodb
```
npm install mongoose --save
```