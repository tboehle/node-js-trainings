var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});

app.get('/contact', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
});

app.get('/profile/:id', function(req, res) {
    res.send('You requested a profile with the id of ' + req.params.id);
});

app.listen(3000);
