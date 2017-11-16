var path = require('path');
var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser')
var multer = require('multer');
app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({
	// uploadDir: './uploads',
	extended: false
}))
// 设置保存路径
app.use(multer({
	dest: 'uploads/',
	limits: {
		fileSize: 100000000
	},
	onFileSizeLimit: function(file) {
		if(file.size > 100000000){
			fs.unlink('./' + file.path)
		}
	}
}).array('image'))

//访问：http://127.0.0.1:8000/file.html
app.get('/file.html', function(req, res) {
	res.sendFile(__dirname + '/' + 'file.html');
})

// 单文件上传
app.post('/file_upload', function(req, res) {
	console.log(req.files[0])
	var des_file = __dirname + '/uploads/' + req.files[0].originalname;
	fs.readFile( req.files[0].path, function(err, data) {
		fs.writeFile(des_file, data, function(err){
			if(err){
				console.log(err)
			}else{
				response = {
					message: 'file success',
					filename: req.files[0].originalname
				};
			}
			console.log(response);
			res.end(JSON.stringify(response))

		})
	})
})

//多文件上传
app.post('/multiple_file_upload', function(req, res) {
	if(req.files == undefined) {
		req.send("您还未选择要上传的图片");
	}else{
		console.log("length---------------")
		console.log(req.files.length)
		console.log("length---------------")
		for(var i=0; i<req.files.length; i++){
			var file_path = req.files[i].path;
			var des_file = __dirname + '/uploads/' + req.files[i].originalname;
			fs.renameSync(file_path, des_file);
		}
		res.send("上传图片成功")
	}
})

// app.get('/read_file', function( req, res) {
	// res.sendfi
// })

//访问：http://127.0.0.1:8000/images/filename 查看文件

var server = app.listen(8000, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
