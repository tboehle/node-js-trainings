const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

// Connect to the database
mongoose.connect('mongodb://test:test@localhost:5000/todo')

// Create a schema
var todoSchema = new mongoose.Schema({
    item: String
});
// Todo model
var Todo = mongoose.Model('Todo', todoSchema);


var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
// middleware for url encoding
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

    app.get('/todo', function(req, res) {
        // get data from mongodb and pass it to view
        Todo.find({}, function(err, data) {
            if (err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        // get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save(function(err, data) {
            if (err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', function(req, res) {
        // delete the requested item from mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    });
};