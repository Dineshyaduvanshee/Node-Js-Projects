const fs = require('fs');
fs.writeFileSync(
    "first.txt",
    "my first file in node js and also the updated one"
);
fs.appendFileSync("first.txt","I am appending the file write now");
fs.appendFileSync("first.txt","I am appending the file write now second time");