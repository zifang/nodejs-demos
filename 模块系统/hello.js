function Hello() {
	var name;
	this.setName = function(thyname){
		name = thyname
	}

	this.sayHello = function(){
		console.log('hello' + name)
	}
}

module.exports = Hello;