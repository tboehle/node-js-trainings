// normal function statement JavaScript
function sayHi() {
    console.log('Hi!');
}
sayHi()

// function expression (anonymous pattern)
var sayBye = function() {
    console.log('Bye!');
}

sayBye();

// function param is a functio
function callFunction(fun) {
    fun();
}

callFunction(sayBye)