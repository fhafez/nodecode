var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type':'text/html'});

    var pages = {
        '/': 'index.html',
        '/fadi':'hello_copy.txt'
    }

    if (pages[req.url]) {
        fs.createReadStream(__dirname + "/" + pages[req.url]).pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

/*
    var obj = {
        firstname: 'fadi',
        lastname: 'hafez'
    }
*/
 
}).listen(1337, '127.0.0.1');