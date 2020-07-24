const events = require('events');

const eventEmitter = new events.EventEmitter();

const userHasRegistered = require('./userHasRegisteredEvent');

eventEmitter.on('userHasRegistered', userHasRegistered);