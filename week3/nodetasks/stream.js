const fs = require('fs');
const path = require('path')

var myWriteStream = fs.createWriteStream(path.join(__dirname,'destination.txt'), 'utf8')
var myReadStream = fs.createReadStream(path.join(__dirname,'content.txt'), 'utf8');
// var buff = new Buffer(16384);
// var buff1 = buff.toString()
myReadStream.on('data',buff1, (chunk)=>{
    console.log('new chunk recieved');
    myWriteStream.write(chunk);
});