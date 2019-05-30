// import { Script } from "vm";

// live-server 

// require 进来一个模块 COMMONJS 模块化方案
const http = require('http');
const https = require('https');
let i = 0;

http
    .createServer(function(request,response){
        i++;
        console.log(i);
        response.end(`Hello World ${i}`);
})
    .listen(3000);

// web服务 在软件上理解就是一个HTTP访问的服务。
//个人域名 服务器
