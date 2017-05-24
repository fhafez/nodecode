var express = require('express');
var bodyparser = require('body-parser');
var mysql = require('mysql');

var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

//var jsonParser = bodyparser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "rigardo88",
        database: "parconta_scar_physiotherapy"
    });

    con.query("SELECT * FROM Clients limit 10", function (err, rows) {
        if (err) throw err;
        console.log(rows);
    });

    next();
});

app.set('view engine','ejs');

htmlController(app);

apiController(app);

app.listen(port);