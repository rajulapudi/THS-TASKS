var http = require("http"); //native models are imported with out file path like "http"

var server = http.createServer(function(request,response){

    response.end("hello world");

});

server.listen(5555, function(){
    console.log("The Server strated at 5555 port !")
});
