 var express = require('express');
 var app = express();
 app.get('/taroH5',function(request,reponse){
 	reponse.sendFile(__dirname+'./dist/index.html');
 })
 app.use(express.static('dist'))
 app.listen(30,function(){
 	console.log('服务已经启动')
 })