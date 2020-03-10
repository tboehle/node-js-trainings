// Modules and require
var events = require('events');

var myEmmiter = new events.EventEmitter()

myEmmiter.on('someEvent', function (msg) {
    console.log(msg);
})

myEmmiter.emit('someEvent', 'the event was emitted')