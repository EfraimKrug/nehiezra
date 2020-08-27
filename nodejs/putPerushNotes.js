const querystring = require('querystring');
const request = require('request');

const options = {
  hostname: 'www.namethatthing.site',
  path: '/cgi-bin/npolen/NPStorePerushNotesAPI.php',
}
////////////////////////////////////////////////////////////////////////
//NOTES:
// url: path/filename + str (where str = "?name=value&name2=value2") ==> php $_REQUEST
// url: path/filename, body:{... } ==> php $_REQUEST
const datar = require('./dataFile.json');
datar.forEach(function(record){
  // console.log(record);
  request.post({
    url: 'https://' + options.hostname + options.path + '?' + querystring.stringify(record),
    json: true
  }, function(error, response, body){
    console.log(body);
    // console.log( options.hostname + options.path + '?' + querystring.stringify(record));
  });
});
