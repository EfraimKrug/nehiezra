const https = require('https');
const querystring = require('querystring');
var jsonDataObj = querystring.stringify({ 'author':"Efraim Mordechai",
                    'sefer':"Job",
                    'chapter':"28",
                    'verse':"3",
                    'note':"Two stones? Awesome! Midrash on psalm 92",
                    'otherabout':"David HaMelech",
                    'othercitation':"92:1",
                    'othersefer':"Thillim"
                  });

const options = {
  hostname: 'www.namethatthing.site',
  port: 80,
  path: '/cgi-bin/npolen/NPStorePerushNotesAPI.php',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(jsonDataObj)
  }
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(jsonDataObj);
req.end();
