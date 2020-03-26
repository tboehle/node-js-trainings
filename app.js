var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }
    else if (req.url === '/api/persons') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let persons = [
            {name: 'thorben', job: 'Developer', age: '23'},
            {name: 'erik', job: 'student', age: '17'},
        ];
        // res.end expects either a buffer or a string
        res.end(JSON.stringify(persons));
    }
    else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
