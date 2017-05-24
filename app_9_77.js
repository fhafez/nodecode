var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyparser.urlencoded({extended: false});

var jsonParser = bodyparser.json();

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

app.post('/person', jsonParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/person/:id', function(req, res) {
    res.render('index', { ID: req.params.id, Qstr: req.query.qstr })
    //res.json({name: req.params.id});

});

app.get('/api', function(req, res) {
    res.json({name: 'fadi'});
});


app.listen(port);