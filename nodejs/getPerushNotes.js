
//NPPerushNotesAPI
const https = require('https')
const options = {
  hostname: 'www.namethatthing.site',
  port: 443,
  path: '/cgi-bin/npolen/NPPerushNotesAPI.php',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  });
  res.on('end', () => {
    console.log('end')
  });
})

req.on('error', error => {
  console.error(error)
})

console.log("starting...");
req.end()
