## TODO App

### MVC

#### Model
* Data Access and data models
  * TODOS
  * USERS

#### Controller
* Controls the app sections
  * todoController
  * userController

#### View
* Template files (ejs)
  * TODO.ejs
  * ACCOUNT ejs

### Mongo DB
* Alternative to SQL databases
* Store documents (JSON) in a db, instead of tables with rows and columns
* Works really well with JavaScript (and therefore Node.JS)

```JavaScript
const mongoose = require('mongoose'); 

// Connect to the database
mongoose.connect('mongodb://test:test@localhost:5000/todo')

// Create a schema
var todoSchema = new mongoose.Schema({
    item: String
});
// Todo model
var Todo = mongoose.Model('Todo', todoSchema);
// Create an item of type Todo model
var itemOne = Todo({item: 'get milk'}).save(function(err) {
    if (err) throw err;
    console.log('item saved');
});
```