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

var parshaList = {
sefat_emet:
[{
sefer:"_Genesis",
parshalist:
[
	{
	parsha:"_Bereshit",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
	},
	{
	parsha:"_Noach",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
	},
	{
	parsha:"_Lech_Lecha",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
	},
	{
	parsha:"_Vayera",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
	},
	{
	parsha:"_Chayei_Sara",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
	},
	{
	parsha:"_Toldot",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
	},
	{
	parsha:"_Vayetzei",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
	},
	{
	parsha:"_Vayishlach",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
	},
	{
	parsha:"_Vayeshev",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
	},
	{
	parsha:"_Miketz",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
	},
	{
	parsha:"_For_Chanuka",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
	},
	{
	parsha:"_Vayigash",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
	},
	{
	parsha:"_Vayechi",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
	},
]},
{
sefer:"_Exodus",
parshalist:
[
	{
	parsha:"_Shemot",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
	},
	{
	parsha:"_Vaera",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
	},
	{
	parsha:"_Bo",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
	},
	{
	parsha:"_Beshalach",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
	},
	{
	parsha:"_Yitro",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
	},
	{
	parsha:"_Mishpatim",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
	},
	{
	parsha:"_Parashat_Shekalim",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
	},
	{
	parsha:"_Terumah",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
	},
	{
	parsha:"_Tetzaveh",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
	},
	{
	parsha:"_Parashat_Zachor",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
	},
	{
	parsha:"_For_Purim",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
	},
	{
	parsha:"_Ki_Tisa",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
	},
	{
	parsha:"_Parashat_Parah",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
	},
	{
	parsha:"_Vayakhel",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
	},
	{
	parsha:"_Pekudei",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
	},
]},
{
sefer:"_Leviticus",
parshalist:
[
	{
	parsha:"_Vayikra",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
	},
	{
	parsha:"_Parashat_HaChodesh",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
	},
	{
	parsha:"_Tzav",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
	},
	{
	parsha:"_For_Shabbat_HaGadol",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
	},
	{
	parsha:"_Passover",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
	},
	{
	parsha:"_Shmini",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
	},
	{
	parsha:"_Tazria",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
	},
	{
	parsha:"_Metzora",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
	},
	{
	parsha:"_Achrei_Mot",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
	},
	{
	parsha:"_Kedoshim",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
	},
	{
	parsha:"_Emor",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
	},
	{
	parsha:"_Behar",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
	},
	{
	parsha:"_Bechukotai",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
	},
]},
{
sefer:"_Numbers",
parshalist:
[
	{
	parsha:"_Bamidbar",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
	},
	{
	parsha:"_Shavuot",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
	},
	{
	parsha:"_Nasso",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
	},
	{
	parsha:"_Beha'alotcha",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
	},
	{
	parsha:"_Sh'lach",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
	},
	{
	parsha:"_Korach",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
	},
	{
	parsha:"_Chukat",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
	},
	{
	parsha:"_Balak",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
	},
	{
	parsha:"_Pinchas",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
	},
	{
	parsha:"_Matot",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
	},
	{
	parsha:"_Masei",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
	},
]},
{
sefer:"_Deuteronomy",
parshalist:
[
	{
	parsha:"_Devarim",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
	},
	{
	parsha:"_Vaetchanan",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
	},
	{
	parsha:"_Eikev",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
	},
	{
	parsha:"_Re'eh",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
	},
	{
	parsha:"_Shoftim",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
	},
	{
	parsha:"_Ki_Teitzei",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
	},
	{
	parsha:"_Ki_Tavo",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
	},
	{
	parsha:"_Nitzavim",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
	},
	{
	parsha:"_Vayeilech",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
	},
	{
	parsha:"_For_the_Month_of_Elul",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	},
	{
	parsha:"_Rosh_HaShanah",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
	},
	{
	parsha:"_Shabbat_Shuva",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
	},
	{
	parsha:"_For_the_Day_of_Atonement",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
	},
	{
	parsha:"_Ha'Azinu",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	},
	{
	parsha:"_Sukkot",
	list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
	},
	{
	parsha:"_V'Zot_HaBerachah",
	list:[1]
	}
	]}
	]
};


var stdin = process.openStdin();
var steps = 0;
var init = true;
var record = {sefer:"", parsha:"", section:"", torah:"", note:""};
var sefer = {	G:parshaList["sefat_emet"][0]["sefer"],
							E:parshaList["sefat_emet"][1]["sefer"],
							L:parshaList["sefat_emet"][2]["sefer"],
							N:parshaList["sefat_emet"][3]["sefer"],
							D:parshaList["sefat_emet"][4]["sefer"]
						};

var seferArray = ['G','E','L','N','D'];
var backRefArray = [parshaList["sefat_emet"][0]["sefer"],
										parshaList["sefat_emet"][1]["sefer"],
										parshaList["sefat_emet"][2]["sefer"],
										parshaList["sefat_emet"][3]["sefer"],
										parshaList["sefat_emet"][4]["sefer"]
										];
var lastParsha = 0;
var lastSefer = "";
var lastSection = 0;

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
console.log(sefer);
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
		seferArray.some(function(member){
			if(member == inp){
				lastSefer = inp;
				record.sefer = sefer[inp];
				console.log("\nGot it: " + record.sefer);
				for(i=0;i<parshaList["sefat_emet"][seferArray.indexOf(inp)].parshalist.length; i++){
					console.log(i + ") " + parshaList["sefat_emet"][seferArray.indexOf(inp)].parshalist[i].parsha);
				}
				console.log("Parsha: {" + parshaList["sefat_emet"][seferArray.indexOf(inp)].parshalist[lastParsha].parsha + "}");
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
		let idx = backRefArray.indexOf(record.sefer);
		record.parsha = parshaList["sefat_emet"][idx].parshalist[parseInt(stuff)].parsha;
		console.log("\nGot it: " + record.parsha);
		console.log("section: {" + lastSection.toString().trim() + "}");
		steps++;
	}
	else
	if(steps == 3){
		stuff = stuff.toString().trim();
		if(!stuff) stuff = lastSection;
		lastSection = stuff;
		record.section = stuff.toString();
		console.log("\nGot it: " + record.section);
		console.log("torah: ");
		steps++;
	}
	else
	if(steps == 4){
		record.torah = stuff.toString();
		console.log("\nGot it: " + record.torah);
		console.log("Note: ");
		steps = 0;
	}
});
