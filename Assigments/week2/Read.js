const fs = require('fs');
//file reading modules
fs.readFile("a.txt", "utf-8",function(err,data){
  console.log(data)
});
console.log("hi kinshuk")
// this is async function becayse we said another person to read a file till that console will run