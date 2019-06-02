/* // Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Bind the connection event with the handler
eventEmitter.on('my_event', () => {
    console.log('data received succesfully.');
  });

// Fire the connection event 
eventEmitter.emit('my_event');

console.log("Program Ended.");
 */

 var events = require('events');
 var eventEmitter = new events.EventEmitter();
 eventEmitter.emit('my_event');
 eventEmitter.on('my_event', () => {
   console.log('data received succesfully.');
 });