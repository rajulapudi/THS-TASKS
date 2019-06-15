const PATH = require('path')
const dirTree = require("directory-tree");
const fs = require('fs');


/* const tree = dirTree("/Users/preeti/Downloads/THS Tasks/week3/pathmodule", {
    extensions: /\.(md|js|html|java|py|rb)$/
  }); */

/* The path module provides utilities for working with file and directory paths */

/* var output = path.basename(__filename)
console.log(output); */

/* var output = path.dirname(__filename)
console.log(output);
// output = /Users/preeti/Downloads/THS Tasks/week3/pathmodule */

/* var output = path.parse('/Users/preeti/Downloads/THS Tasks/week3/pathmodule/app.js')
console.log(output)
//Output = 
{
  root: '/',
  dir: '/Users/preeti/Downloads/THS Tasks/week3/pathmodule',
  base: 'app.js',
  ext: '.js',
  name: 'app'
} */
/* 
posix: {
    resolve: [Function: resolve],
    normalize: [Function: normalize],
    isAbsolute: [Function: isAbsolute],
    join: [Function: join],
    relative: [Function: relative],
    toNamespacedPath: [Function: toNamespacedPath],
    dirname: [Function: dirname],
    basename: [Function: basename],
    extname: [Function: extname],
    format: [Function: bound _format],
    parse: [Function: parse],
    sep: '/',
    delimiter: ':',
    win32: [Circular],
    posix: [Circular],
    _makeLong: [Function: toNamespacedPath]
  }, */

/* var output = path.resolve(__filename)
console.log(output)

var output1 = process.cwd(__filename)
console.log(output1)

var output2 = path.dirname(__filename)
console.log(output2)

var process1 = process.env.PATH;
console.log(process1);

console.log(process.memoryUsage());

console.log(`The parent process is pid ${process.ppid}`);

console.log(`The  process is pid ${process.pid}`);

console.log(process.env.PATH.split(path.delimiter)); */

/* const tree = dirTree(__filename, {extensions:/\.js$/}, (item, PATH, stats) => {
    console.log(item);
}); */

/* let directory = 'pranee';
let dirBuf = Buffer.from(directory) */

function abc(dir){
let fof = fs.readdirSync('/Users/preeti/Desktop');
/* fof is an array of folders & files in root - we need to parse each of them*/
fof.forEach(element => {
    if (fs.statSync(element).isDirectory==true && fs.statSync(element)!== dir){
        return abc(element);
    }else if (fs.statSync(element).isDirectory==true && fs.statSync(element)== dir){
        return path.dirname(element)
    }else console.log('folder not found')
});}
abc('expproj')
/* fs.stat('app.js', (err, stats)=> {
    if (err) {
       return console.error(err);
    }
    console.log(stats.isDirectory())}); */