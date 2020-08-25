const querystring = require('querystring');
const request = require('request');

const options = {
  hostname: 'www.namethatthing.site',
  path: '/cgi-bin/npolen/NPStorePerushNotesAPI.php',
}
////////////////////////////////////
var jsonDataObj = { 'author':"Efraim Mordechai",
                    'sefer':"Job",
                    'chapter':"28",
                    'verse':"3",
                    'note':"Two stones? Awesome! Midrash on psalm 92",
                    'otherabout':"David HaMelech",
                    'othercitation':"92:1",
                    'othersefer':"Thillim"
                  };
////////////////////////////////////////////////////////////////////////
//NOTES:
// url: path/filename + str (where str = "?name=value&name2=value2") ==> php $_REQUEST
// url: path/filename, body:{... } ==> php $_REQUEST
const datar = require('./dataFile.json');
datar.forEach(function(record){
  console.log(querystring.stringify(record));
  request.post({
    url: 'https://' + options.hostname + options.path + '?' + querystring.stringify(record),
    json: true
  }, function(error, response, body){
    console.log(body);
  });
});
