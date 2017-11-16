var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log('listener1 执行');
}

var listener2 = function listener2() {
	console.log('listener2 执行');
}

//监听事件1
eventEmitter.addListener('connection',listener1);
//监听事件2
eventEmitter.on('connection',listener2);
//执行监听器
eventEmitter.emit('connection');

var count = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log("count:::"+ count);

//移除事件1的监听
eventEmitter.removeListener('connection', listener1);

eventEmitter.emit('connection');

console.log('end')
