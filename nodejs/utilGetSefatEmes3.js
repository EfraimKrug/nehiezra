var req = require("http");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(url){
  // console.log("------------");
  // console.log(url);
  return new Promise(function(succeed, fail){
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function(){
      if(req.status < 400)
          succeed(req.responseText);
      else
          fail(new Error("Request failed: " + req.statusText));
      });
    req.addEventListener("error", function(){
      fail(new Error("Network Error"));
    });
    req.send(null);
  });
}

function getJSON(url){
  return get(url).then(JSON.parse);
}

function setupCall(data){
  if(!data['next']) return;
  var arr = data['next'].split(",");
  num = arr[2].trim().substring(arr[2].trim().lastIndexOf(" ")).trim();
  parsha = arr[2].trim().substring(0,arr[2].trim().lastIndexOf(" ")).trim().replace(/ /g,"_");
  var arr2 = arr[2].trim().split(" ");
  var s = arr[0].replace(/ /g, "_") + ",_" + arr[1].trim() + ",_" + parsha + "." + num;
  console.log(s);
  fire(s);
}

function fire(title){
    if(!title) return;
    getJSON("https://www.sefaria.org/api/texts/"+title)
        .then(function(data){
                  return setupCall(data);
                }).catch(function(error){
                  console.log("EMK Error..." + String(error));
                });
}

// fire("Sefat_Emet,_Deuteronomy,_V'Zot_HaBerachah.1");
// fire("Sefat_Emet,_Leviticus,_Tzav.22");
fire("Sefat_Emet,_Genesis,_Bereshit");
// fire("Sefat_Emet,_Genesis,_Noach.34");
