var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.send('chou haha');
})

var server = app.listen('8000',function(){
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址 http://%s:%s",host,port)
})


