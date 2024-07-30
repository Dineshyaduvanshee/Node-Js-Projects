
const fs = require('fs');
const os = require('os');
console.log(os.cpus().length );

console.log("1");
//fs.writeFileSync('./test.txt', "hello world");

//Async
//fs.writeFile('./test.txt', "hello world Async",(err)=>{})

// const result = fs.readFileSync('./Contact.txt', "utf-8",(err,result)=>{
//     if(err) {
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// });
// console.log(result);

//fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());
//fs.appendFileSync('./test.txt',`${Date.now()} Hey there\n`);

//fs.cpSync('./test.txt','./copy.txt');

//fs.unlinkSync('./copy.txt');
//console.log(fs.statSync('./test.txt'));

//fs.mkdirSync('my-docs/a/b',{recursive:true});

const result = fs.readFileSync("Contact.txt", "utf-8",(err,result)=>{
    console.log(result);
});

 console.log(result);

console.log("2");
console.log("3");
console.log("4");
//Defalut Thread pool size = 4
