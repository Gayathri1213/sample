/*os module */
var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

console.log('\n');
/*Path module*/
var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

console.log('\n');
/*Domain module*/
var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();

// Create a domain
var domain1 = domain.create();

domain1.on('error', function(err) {
   console.log("domain1 handled this error ("+err.message+")");
});

// Explicit binding 
domain1.add(emitter1);

emitter1.on('error',function(err) {
   console.log("listener handled this error ("+err.message+")");
});

emitter1.emit('error',new Error('To be handled by listener'));
emitter1.removeAllListeners('error');
emitter1.emit('error',new Error('To be handled by domain1'));

var domain2 = domain.create();

domain2.on('error', function(err) {
   console.log("domain2 handled this error ("+err.message+")");
});

// Implicit binding
domain2.run(function() {
   var emitter2 = new EventEmitter();
   emitter2.emit('error',new Error('To be handled by domain2'));   
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('Converted to exception. System will crash!'));

console.log('\n');
/*DNS module*/
var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, address, family) {
   console.log('address:', address);
   dns.reverse(address, function (err, hostnames) {
      if (err) {
         console.log(err.stack);
      }

      console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
   });  
});