////////////////////////////////////////////////////////////////////
// This request setup is just to make it easier to put in notes on
// Reb Nehemia's Sefas Emes...
//
// start up serverX.js, then enter data via this program.
// so far I am using two console windows to accomplish this.
//
// data is written into file: sefat_emet_gather.js -
// that file needs to be copied into sefat_emet_np.js
///////////////////////////////////////////////////////////////////

var http = require("http");

var stdin = process.openStdin();
var steps = 0;
var init = true;
var record = {sefer:"", parsha:"", chapter:"", verse:"", note:""};
var sefer = {G:"Genesis", E:"Exodus", L:"Leviticus", N:"Numbers", D:"Deuterotomy"};

var lastParsha = "";
var lastSefer = "";
var lastChapter = "";

function sendToServer(record){
	var request = http.request({
		hostname: "localhost",
		port: 8000,
		method: "PUT"
	}, function(response){
		response.on("data", function(chunk){
		console.log(chunk.toString());
		});
	});
	request.end(JSON.stringify(record));
}

console.log("Enter to continue...");
stdin.addListener("data", function(stuff){
	if(steps == 0){
		if(!init){
		 	record.note = stuff.toString();
			console.log("\nGot it: " + record.note);
			sendToServer(record);
		}
		console.log("Sefer: [G,E,L,N,D]: {" + lastSefer.toString().trim() + "}");
		init = false;
		steps++;
	}
	else
	if(steps == 1){
		let inp = stuff.toString().toUpperCase().trim();
		if(!inp) inp = lastSefer;
		['G','E','L','N','D'].some(function(member){
			if(member == inp){
				lastSefer = inp;
				record.sefer = sefer[inp];
				console.log("\nGot it: " + record.sefer);
				console.log("Parsha: {" + lastParsha.toString().trim() + "}");
				return true;
			}
			return false;
		});
		steps++;
	}
	else
	if(steps == 2){
		stuff = stuff.toString().trim();
		if(!stuff) stuff = lastParsha;
		lastParsha = stuff;
		record.parsha = stuff.toString();
		console.log("\nGot it: " + record.parsha);
		console.log("Chapter: {" + lastChapter.toString().trim() + "}");
		steps++;
	}
	else
	if(steps == 3){
		stuff = stuff.toString().trim();
		if(!stuff) stuff = lastChapter;
		lastChapter = stuff;
		record.chapter = stuff.toString();
		console.log("\nGot it: " + record.chapter);
		console.log("Verse: ");
		steps++;
	}
	else
	if(steps == 4){
		record.verse = stuff.toString();
		console.log("\nGot it: " + record.verse);
		console.log("Note: ");
		steps = 0;
	}
});
