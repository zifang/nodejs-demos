var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('event', function() {
	console.log('event emit');
});

setTimeout(function() {
	eventEmitter.emit('event');
},1000)


//当事件被触发时，函数会一次执行，相同的函数不会被覆盖
eventEmitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
eventEmitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 
eventEmitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 