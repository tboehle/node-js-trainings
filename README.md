## Node JS

### Definition
Node JS
* is a JavaScript runtime built on Chrome's V8 JavaScript engine
* uses an event-driven, non-blocking model+
* is lightweight and efficient
* package ecosystem, npm is the largest ecosystem of open source libraries in the world
* is written in C++

Node JS actually is
* a platform which allows to run JavaScript on a computer / **server**
* read, delete and update files
* easily communicate with a database

JavaScript Engine
* computers do not understand JavaScript
* a JavaScript engine takes JavaScript and converts it into something it does understand - machine code
* at the heart of Node JS is the V8 engine
* the V8 engine converts our JS into machine code
* V8 can run standalone, or can be embedded into any C++ application

Why is Node JS popular?
* it uses JavaScript
* very fast (runs on the V8 engine & uses non-blocking code)
* huge ecosystem of open source packages (npm)
* great for real-time services (like chats)

### IDE
* Atom with __Monokai Tweaked__ Theme

### How Node JS works

* [global object](https://nodejs.org/dist/latest-v12.x/docs/api/globals.html) in Node JS gives access to some methods straight OOTB. You can use them anywhere in the node app
  * `console.log();`
  * `setTimeout(function(){}, 3000);`
  * `setInterval(function(){}, 3000);`
  * `console.log(__dirname);`
  * `console.log(__filename);`
* function expressions
  * anonymous function expressions
  * anonymous function expressions stored in a variable
  * Like in Go, you can pass a func type as param into a method
* Modules and `require()`
  * Split code into logical modules
  * Code can use and refer to modules
  * Node JS has some pre built modules like `var event = require('events')`
  * The export of `module.exports` is returned to `var somejs = require('./somejs')`
  * Three different ways:
```JavaScript
module.exports = {
        counter: counter,
        adder: adder,
        pi: pi
};
```
```JavaScript
module.exports.pi = 3.142;
```
```JavaScript
var pi = 3.142;
module.exports.pi = pi;
```
* Event emitter are emitting events for elements and can be inherited
* Scope, initialization, declaration and hoisting (initial default value)
  * ``var``:
    * function scoped
    * undefined when accessing a variable before it's declared
  * ``let``: 
    * block scoped
    * ReferenceError when accessing a variable before it's declared
  * ``const``:
    * block scoped
    * ReferenceError when accessing a variable before it's declared
    * can't be reassigned
  * Conclusion:
    * Most popular is to always use `const` unless you know the variable is going to change. With `const` one can signal that a variable shoudn't change
    * The unpopular opinion, though it still has some validity: You should never use ``const`` because even though you’re trying to signal that the variable is immutable, as we saw above, that’s not entirely the case. Developers who subscribe to this opinion always use ``let`` unless they have variables that are actually constants like ``_LOCATION_ = ...``

### Communication
* Protocols: A set of communication rules, that two sides agree to use when communicating
* Ports: A programm running on a computer can listen for requests sent to a particular port number

### Streams and Buffers
Comparison: Streaming a movie -> bufers and streams in action

Buffers
* Temporary storage spot for a chunk of data that is being transferred from one place to another
* The buffer is filled with data, then passed along
* Transfer small chunks of data at a time

Streams
* streams transfer data
* increase performance
* Writable streams - allow node js to write data to a stream
* Readable streams - allow node js to read data from a stream
* Duplex - can read and write toa stream

## NPM


