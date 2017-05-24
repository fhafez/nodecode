var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/hello.txt', { encoding: 'utf8', highWaterMark: 32768});

var writeable = fs.createWriteStream(__dirname + '/hello_copy.txt');

/*
readable.on('data', function(chunk) {
    console.log(chunk);
    writeable.write(chunk);
});
*/

var compressed = fs.createWriteStream(__dirname + '/hello_compressed.gz');

var zipfile = zlib.createGzip();

readable.pipe(writeable);
readable.pipe(zipfile).pipe(compressed);