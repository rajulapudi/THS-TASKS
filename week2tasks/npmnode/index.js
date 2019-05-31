var express = require("express");
var port = 8080;
const app = express();
/*
var server = http.createServer((req,res)=>{
    res.end("Hello"+"\n")
});

server.listen(port, ()=>{
    console.log("Hi this is from server");
});
*/




app.get("/",(req,res)=>{
    res.send("This is 1st Message");//we can only send one response
});

app.get("/login", (req,res)=>{
    res.send("I am login");
});

app.listen(port,()=>{console.log("Server started at :" + port)});



