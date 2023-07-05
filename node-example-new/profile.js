var url = require('url');
const http = require('http')
var fs = require('fs');
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    //  console.log(req.url)
        res.status=200;
        res.setHeader('Content-Type','text/html');
       var q = url.parse(req.url, true);
        var obj = q.query;
        if(obj!=null)
        {
        var rno = obj.txtrno;
        var name=obj.txtname;
        var branch=obj.txtbranch;
        var result = `rno is ${rno}, name is ${name}, branch is ${branch} `;
        fs.writeFileSync('d://student.txt',result, function (err) {
            if (err) throw err;
            console.log('Saved! ',rno);
            res.end("")
          });
        }
       
        
        //res.write(""+r)
       
      })
      server.listen(port, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`)
        })