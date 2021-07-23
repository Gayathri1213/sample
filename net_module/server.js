var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   
   connection.write('Welcome to Nueve Solutions!!\r\n');
   connection.pipe(connection);
}); 

server.listen(8089, function() { 
   console.log('server is listening');
});