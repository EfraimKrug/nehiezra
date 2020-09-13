////////////////////////////////////////////////////////////////////
// This server is just to make it easier to put in notes on
// Reb Nehemia's Sefas Emes...
//
// start up serverX.js, then enter data via requestX.js
// so far I am using two console windows to accomplish this.
// data is written into file: sefat_emet_gather.js -
// that file needs to be copied into sefat_emet_np.js
///////////////////////////////////////////////////////////////////
var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	request.on("data", function(chunk){
		ch = JSON.parse(chunk.toString());
		var line = '\n\t{"Sefat_Emet,' + ch.sefer.trim() + ',' + ch.parsha.trim() + '.' + ch.section.trim() + ':' + ch.torah.trim() + '":[true,"' + ch.note.trim() + '"]},';
		fs.appendFile("sefat_emet_gather.js", line, function(err){
			if(err) console.log("Write Error: ", err);
		});
		response.write(line);
	});
	request.on("end", function(){
		response.end();
	});
}).listen(8000);
