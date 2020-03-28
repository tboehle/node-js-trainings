const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files middleware for every request
app.use(express.static('./public'));

// fire controllers
todoController(app);


// listen to port 
app.listen(3000);
console.log('Listening to port 3000');