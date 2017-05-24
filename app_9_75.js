var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req, res) {
    console.log('hello');
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
    //res.end();
});

app.get('/person/:id', function(req, res) {
    res.json({name: req.params.id});
});

app.get('/api', function(req, res) {
    res.json({name: 'fadi'});
});


app.listen(port);