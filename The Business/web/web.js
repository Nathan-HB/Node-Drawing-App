var http = require('http');
var fs = require('fs');
var port = 3000;

var server =  http.createServer(function(req, res){
    fs.readFile('D:/Documents/development/workspace/nodeDrawApp/Node-Drawing-App/The Business/HTMLs/index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(port);