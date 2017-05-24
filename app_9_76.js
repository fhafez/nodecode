var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.set('view engine','ejs');

app.get('/', function(req, res) {
    console.log('hello');
    res.render('index', {'name':'fadiadd'});
    //res.end();
});

app.get('/person/:id', function(req, res) {
    res.json({name: req.params.id});
});

app.get('/api', function(req, res) {
    res.json({name: 'fadi'});
});


app.listen(port);