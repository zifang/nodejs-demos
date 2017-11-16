var fs = require('fs');
var buf = new Buffer(1024);

// 读取文件
fs.readFile('input.txt',function(err, data) {
	if(err){
		return console.error(err);
	}

	console.log('异步读取：' +data.toString())
})

var data = fs.readFileSync('input.txt');
console.log('同步读取：'+ data.toString())


//打开文件
fs.open('input.txt', 'r+', function(err,fd){
	if(err) {
		return console.error(err);
	}
	console.log('open success')
})

//获取文件信息
fs.stat('input.txt',function(err,stats){
	console.log(stats)
})

//写入文件
fs.writeFile('input2.txt', '我是通过写入的文件内容！',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});

// 关闭文件

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件！");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // 关闭文件
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("文件关闭成功");
      });
   });
});