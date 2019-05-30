npm init -y     初始化
npm install sha1 安装加密
传统的MVC后端开发

MVVM
Model   Page({data: {}})
View    Template wxml
VM      {{}} wx:for

MVC
Model   数据库
V view 静态页面
C Controller控制器

Web HTTP服务器
端口？ 3000
Mysql  3306
WebServer 80

用户 Request 通过IP + 端口
Web Server Response

http
    .createServer(function(request, response){
        request 用户N
        response
    })
    .listen(8080)