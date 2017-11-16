var buf = new Buffer('node test');
console.log(buf.toJSON(buf));
console.log(buf.toString());


//buffer的合并
var buf2 = new Buffer('chou haha');
var buf3 = Buffer.concat([buf,buf2]);
console.log(buf3.toString())


//buffer的比较
var result = buf.compare(buf2);

if(result < 0) {
   console.log(buf + " 在 " + buf2 + "之前");
}else if(result == 0){
   console.log(buf + " 与 " + buf2 + "相同");
}else {
   console.log(buf + " 在 " + buf2 + "之后");
}


//拷贝缓冲区
var buf4 = new Buffer(9);
buf2.copy(buf4);
console.log('buf4: '+ buf4);


//缓冲区裁剪
var buf5 = buf2.slice(0,3);
console.log('buf5:' +buf5.toString())
console.log(buf5.length);