var Emitter = require('events');
var eventConfig = require('./config').events;

var emitter = new Emitter();

emitter.on(eventConfig.GREET, function() {
    console.log('somewhere, someone said hello');
});

emitter.on(eventConfig.GREET, function() {
    console.log('greet me!');
});

console.log('hello');
emitter.emit('greet');