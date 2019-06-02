const url = require('url');

const myUrl = new URL('http://techpranee.com');

//Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

console.log(myUrl.host); // will get port # if available
console.log(myUrl.hostname); 
console.log(myUrl.pathname); 
console.log(myUrl.search); 
console.log(myUrl.searchParams); 


// we can append search params and also loop through the params






