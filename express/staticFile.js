var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('chou haha, chou de bu yao bu yao de ');
})

var server = app.listen(8000, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

