const http = require('http');
const fs = require('fs');
const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New Request Recived\n`;
   fs.appendFile("log.txt",log,(err,data)=>{
    switch(req.url){
        case '/':res.end("Hello from home page"); 
        break;
        case '/help':res.end("Hello from help page");
        break;
        case '/about':res.end("Hello from about page");
        break;
        default:
            res.end("404 page not found");
       
    }
  
   });
   
});

myserver.listen(8000,()=>
    console.log("Server started")
);