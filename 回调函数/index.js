var fs = require('fs');
//阻塞代码实例
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('block end');
console.log("-----------------------------");
//非阻塞代码实例
fs.readFile('input.txt', function(err, data) {
	if(err) {
		console.error(err);
		return;
	}

	console.log(data.toString());
})
console.log('non-blocking end');