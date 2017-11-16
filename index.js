var http = require('http');
var express = require('express');
var fs = require('fs');


var server = require('./server');
var router = require('./router');
server.start(router.route);


fs.writeFile('i.txt', 'content: chouhaha', function(err) {
	if(err) {
		return console.error(err)
	}
	console.log('write success')
	console.log("-----------------------------")
	console.log('read file')
	fs.readFile('i.txt', function(err, data) {
		if(err){
			return console.error(err)
		}
		console.log('read result: ' + data.toString())
	})
})


// http.createServer(function (request, response) {

// 	response.writeHead(200, { 'Content-Type': 'text/plain'});

// 	response.end('chouhaha\n');

// }).listen(6060);

// console.log('Server running at http://127.0.0.1:6060/');

// var data = fs.readFileSync('demo1.txt');
// console.log(data.toString());
// console.log("程序执行结束")

// var data1 = fs.readFileSync('demo2.txt');
// console.log(data1.toString());
// console.log("程序执行结束1")

// fs.readFile('demo1.txt', function (err,data) {
// 	if (err) {
// 		console.log(err.stack);
// 		return;
// 	}
// 	console.log(data.toString());
// });
// console.log("程序执行结束1")


// fs.stat('demo2.txt', function(err, stats) {
// 	console.log(stats)
// 	console.log(stats.isFile())	
// })

// fs.readFile('demo2.txt', function (err, data) {
// 	if (err) return console.error(err);
// 	console.log(data.toString());
// })
// var Buffer = new 
// Buffer 
// toString()
// toJSON()
// cnocat
		/*var buf1 = new Buffer('chouhaha ');
		var buf2 = new Buffer('xiangfangzi');
		var buf3 = Buffer.concat([buf1,buf2])
		console.log('buf3:::'+ buf3.toString())*/
// compare
		/*var buffer1 = new Buffer('ABC');
		var buffer2 = new Buffer('ABCD');
		var result = buffer1.compare(buffer2);

		if(result < 0) {
		   console.log(buffer1 + " 在 " + buffer2 + "之前");
		}else if(result == 0){
		   console.log(buffer1 + " 与 " + buffer2 + "相同");
		}else {
		   console.log(buffer1 + " 在 " + buffer2 + "之后");
		}*/

//读入
// var readStream = fs.createReadStream('input.txt');
// //写入
// var outStream = fs.createWriteStream('output.txt')
// // 读入input.txt并写入output.txt中
// readStream.pipe(outStream);
// console.log("gave over");

