var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);
app.get('/', function(req, res){ res.sendFile('E:/node-example/home.html');
});

io.on("connection",function(socket){
    console.log('user connected');
    socket.on('disconnect', function () {
        console.log('A user disconnected');
     });
});
http.listen(3000,function(){
    console.log('client port no is 3000');
})
var server = app.listen(2000,function(){
    var host = server.address().address;  
   var port = server.address().port;  
   console.log('Example app listening at http://%s:%s', host, port);  
})