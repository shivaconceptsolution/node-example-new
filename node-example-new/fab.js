var url = require('url');
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    //  console.log(req.url)
       var q = url.parse(req.url, true);
        var obj = q.query
        var res1 = parseInt(obj.txtnum1)
        var a=-1;
        var b=1;
        var r = '';
        for(var i=0;i<res1;i++)
        {
             var c = a+b;
             a=b;
             b=c;
             r = r + c + "<br>";
        }
        res.status=200;
        res.setHeader('Content-Type','text/html');
        res.write(""+r)
       //res.end("<h1>Hello World</h1>")
      })
      server.listen(port, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`)
        })