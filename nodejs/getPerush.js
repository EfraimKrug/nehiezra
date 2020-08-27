var fs = require('fs');
var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var author = "Nehemia Polen";
var sefer = "Vayikra";
var chapter = "5";
var verse = "1";
var note = "";
var otherabout = "";
var othercitation = "";
var othersefer = "";

const question8 = () => {
  return new Promise((resolve, reject) => {
    rl.question('othersefer: (' + othersefer + '): ', (otherseferIn) => {
      if(otherseferIn) othersefer = otherseferIn.replace(/\"/g, "'");
      console.log(`Thank you: ${othersefer}`);
      resolve()
    })
  })
}

const question7 = () => {
  return new Promise((resolve, reject) => {
    rl.question('othercitation: (' + othercitation + '): ', (othercitationIn) => {
      if(othercitationIn) othercitation = othercitationIn.replace(/\"/g, "'");;
      console.log(`Thank you: ${othercitation}`);
      resolve()
    })
  })
}

const question6 = () => {
  return new Promise((resolve, reject) => {
    rl.question('otherabout: (' + otherabout + '): ', (otheraboutIn) => {
      if(otheraboutIn) otherabout = otheraboutIn.replace(/\"/g, "'");;
      console.log(`Thank you: ${otherabout}`);
      resolve()
    })
  })
}

const question5 = () => {
  return new Promise((resolve, reject) => {
    rl.question('note: (' + note + '): ', (noteIn) => {
      if(noteIn) note = noteIn.replace(/\"/g, "'");;
      console.log(`Thank you: ${note}`);
      resolve()
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question('verse: (' + verse + '): ', (verseIn) => {
      if(verseIn) verse = verseIn.replace(/\"/g, "'");;
      console.log(`Thank you: ${verse}`);
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('chapter: (' + chapter + '): ', (chapterIn) => {
      if(chapterIn) chapter = chapterIn.replace(/\"/g, "'");;
      console.log(`Thank you: ${chapter}`);
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('sefer: (' + sefer + '): ', (seferIn) => {
      if(seferIn) sefer = seferIn.replace(/\"/g, "'");;
      console.log(`Thank you: ${sefer}`);
      resolve()
    })
  })
}

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Author: (' + author + '): ', (authorIn) => {
      if(authorIn) author = authorIn.replace(/\"/g, "'");;
      console.log(`Thank you: ${author}`);
      resolve()
    })
  })
}


function appendLine(){
  var obj = {
    author : author,
    sefer : sefer,
    chapter : chapter,
    verse : verse ,
    note : note,
    otherabout : otherabout,
    othercitation : othercitation,
    othersefer : othersefer
  }

  fs.appendFile('perush.txt', JSON.stringify(obj)+",", function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}


const main = async () => {
  await question1();
  await question2();
  await question3();
  await question4();
  await question5();
  await question6();
  await question7();
  await question8();
  appendLine();
  rl.close();
}

main();
