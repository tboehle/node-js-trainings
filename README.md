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

* [global object](https://nodejs.org/dist/latest-v12.x/docs/api/globals.html) in Node JS gives access to some methods staright OOTB. You can use them anywhere in the node app
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
  * The export of `module.exports` is returned to `require(./somejs)`