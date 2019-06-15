var buf = new Buffer("Hello", 'utf8');	//C++ Buffer

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('wo');
console.log(buf.toString());


var buffer = new ArrayBuffer(8);
var view = new Int8Array(buffer);

console.log(view)

view[0] = 5;
view[1]= 127;
console.log(view);

