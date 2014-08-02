
var through = require('through');

var split = require('split');

var count = 1;

// function write(buf) {
//   if (count%2 != 0) {
//     count += 1
//     this.queue(buf.toString().toLowerCase())
//   } else {
//     count += 1;
//     this.queue(buf.toString().toUpperCase())
//   }
// }

function write(buf){
  this.queue(buf);
}

var tr = through(write);


process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);