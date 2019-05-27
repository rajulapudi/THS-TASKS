var file2 = require("./file2") /*This is the import statement which will actually render all the contents of imported file. We can call any function in the file2.*/


var file = function(){
console.log("File1 from Function");
};



file();
file2.fun1();
/*console.log(file2.fun2());
file2.file2();
console.log(file2.x);*/
