var events = require('events');
var eventEmitter = new events.EventEmitter();

//绑定事件
// eventEmitter.on('eventName', eventHandler);

//触发事件
// eventEmitter.emit('eventName');
var connect = function connected() {
	console.log('connect success');

	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connect);

eventEmitter.on('data_received', function(){
	console.log('数据接收成功');
})

eventEmitter.emit('connection');
console.log("run end")