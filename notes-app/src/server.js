// express is a web framework that we’ll be using for building the REST APIs
const express = require('express');
// body-parser is a module that parses the request (of various content types) and creates a req.body object that we can access in our routes
const bodyParser = require('body-parser');

// create express app
const app = express();

// mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
const cors = require('cors');
app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// import db config
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})

// define simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});