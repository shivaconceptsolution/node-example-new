const http = require('http')
http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.end('<h1>Welcome in NODE JS SERVER MODULE BASED Application</h1>');
}).listen(1000)
console.log('type localhost:1000 in url')