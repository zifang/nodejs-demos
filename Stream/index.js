var fs = require('fs');
//读取流
var data = '';
var rStream = fs.createReadStream('input.txt');
rStream.setEncoding('utf-8');

rStream.on('data',function(chunk) {
	data += chunk;
})

rStream.on('end',function(){
	console.log(data);
})

rStream.on('error',function(err){
	console.log(err.stack)
})

console.log('read end------------------------')

//写入流
var text = 'chou haha';

var wStream = fs.createWriteStream('output.txt');
// wStream.write(text,'utf-8');
// wStream.end();

// wStream.on('finish',function(){
// 	console.log('write finished');
// })

// wStream.on('error',function(err){
// 	console.log(err.stack);
// })

console.log('write end -------------')

// 管道流

rStream.pipe(wStream);
console.log('pipe end ------------');

//链式流

var zlib = require('zlib');

// fs.createReadStream('input.txt')
// 	.pipe(zlib.createGzip())
// 	.pipe(fs.createWriteStream('input.txt.gz'))
// console.log('file ziped succee')


fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input.txt'));
console.log('file unziped succee')
