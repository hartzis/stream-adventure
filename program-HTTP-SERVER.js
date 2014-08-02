var http = require('http');
var fs = require('fs');

var through = require('through');

function write(buf) {
  // console.log('buf-', buf);
  this.queue(buf.toString().toUpperCase());
}

var tr = through(write);

var server = http.createServer(function (req, res) {
      if (req.method = 'POST') {
        req.pipe(tr).pipe(res);  
      } else {
        res.end('send me a post')
      }
      
  });
server.listen(parseInt(process.argv[2]));