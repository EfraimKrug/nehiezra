const datar = require('./dataFile.json');
datar.forEach(function(record){
  console.log(record.author);
});
