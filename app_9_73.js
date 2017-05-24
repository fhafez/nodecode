var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    console.log('hello');
    res.send('<html>hello</html>');
    //res.end();
});

app.get('/api', function(req, res) {
    res.json({name: 'fadi'});
});

app.listen(port);