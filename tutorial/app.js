var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// needed for parsing requests
var urlencodeParser = bodyParser.urlencoded({ extended: false });

// set ejs as default view engine, views is the default folder to look for ejs files
app.set('view engine', 'ejs');
// serving static files, map assets to folder assets
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    // prepopulate form fiels with query string parameters -> req.query
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodeParser, function(req, res) {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
})

app.get('/profile/:name', function(req, res) {
    var data = {age: 29, job: 'Developer', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
