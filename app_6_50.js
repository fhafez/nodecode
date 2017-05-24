var fs = require('fs');

//var greet = fs.readFileSync(__dirname + '/hello.txt','utf8');

var greet = fs.readFile(__dirname + '/hello.txt', 'utf8', function(err, data) {
    if (err) {
        console.log('error ' + err);
    } else {
        console.log('data: ' + data);
    }
})

console.log('done');