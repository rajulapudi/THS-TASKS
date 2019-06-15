const fs = require('fs');
const path = require('path');

const readline = require('readline-sync')

fs.mkdir(path.join(__dirname, readline.question('what do you want the new folder to be named?')),(err)=>{
    if (err){console.log(err)}
})

fs.readdir(__dirname, (err,files)=>{
    if(err){console.log(err)}
    else {
    console.log(`the list of files and folders in the current directory are : ${files}`)
}
})

fs.rmdir((path.join(__dirname, readline.question('which folder do you want to delete?'))),(err)=>{
    if (err) {console.log (err)}
})

fs.readFile((path.join(__dirname, readline.question('which file do you want to read?'))), (err,data)=>{
    if (err) {console.log(err)}
    else {console.log(data)}
})

fs.appendFile(path.join(__dirname, readline.question('to which file do you want to append')),'//this line is added by the program',(err)=>{
    if (err){console.log(err)}
})
//this line is added by the program