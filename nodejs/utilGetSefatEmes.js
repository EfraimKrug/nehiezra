
//NPPerushNotesAPI
const https = require('https')
const options = {
  hostname: 'www.sefaria.org',
  port: 443,
  path: '/api/texts/Sefat_Emet,_Genesis,_Bereshit',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on('data', d => {
    j = JSON.parse(d);
    if(j['ref'])
    console.log(j['ref']);
    // k = Object.keys(d);
    // for(let i = 0; i < k.length; i++){
      // console.log(d);
      // console.log("\n==>" + k[i]);
    // }

    // console.log(d[0]);
    // process.stdout.write(d);
    // process.stdout.write("\n"+d.length+"");
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
