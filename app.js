var http = require('http');
var fs = require('fs');

// will be parsed through buffer
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

// listening to readStream and piping it to writeStream
myReadStream.pipe(myWriteStream);


var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // data is parsed through buffer sequences
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

    // listening to readStream (data) and piping it to response writable stream
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
