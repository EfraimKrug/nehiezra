var req = require("http");

function get(url){
  return new Promise(function(succeed, fail){
    // var req = new XMLHttpRequest();
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

getJSON("https://www.sefaria.org/api/texts/Sefat_Emet,_Genesis,_Bereshit")
    .then(function(data){
              return getJSON(data);
            }).catch(function(error){
              console.log("EMK Error..." + String(error));
            });
