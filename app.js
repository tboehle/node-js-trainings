var express = require('express');
var app = express();

// set ejs as default view engine, views is the default folder to look for ejs files
app.set('view engine', 'ejs');
// serving static files, map assets to folder assets
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/profile/:name', function(req, res) {
    var data = {age: 29, job: 'Developer', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
