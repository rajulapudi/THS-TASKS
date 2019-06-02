// path module in node.js
const fs = require('fs')
const path = require("path");

// console.log(path.basename(__filename));

// console.log(path.parse(__filename));

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) 
//         throw(err);
    
//     console.log('folder created');
// });

// create and write to file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world from write file\n', (err) => {
//     if (err) 
//         throw(err);
    
//     console.log('file created');
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'hello from append', (err) => {
//         if (err) 
//             throw(err);
        
//         console.log('file appended');
//     });
// });

fs.rename(path.join(__dirname, '/test', 'hi.txt'), path.join(__dirname, '/test', 'hohhooo.txt'), (err) => {
    if (err) 
        throw(err);
    
    console.log('file is renamed');
});