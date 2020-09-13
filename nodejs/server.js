var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	request.on("data", function(chunk){
		if(chunk.toString().toUpperCase()[0] == "B"){
	});
	request.on("end", function(){
		response.end();
	});
}).listen(8005);
