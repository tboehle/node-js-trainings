// Modules and require
var events = require('events');
var util = require('util');

var Person = function (name) {
    this.name = name;
};
// everything crated using the Person constructor is able to attach custom events
util.inherits(Person, events.EventEmitter)

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

// define event speak for each person
people.forEach(function (person) {
    // we can attach custom events to the people now
    person.on('speak', function (msg) {
        console.log(person.name + ' said ' + msg);
    });
});

// call defined events
james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I am hungry!');