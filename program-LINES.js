
var through = require('through');

var split = require('split');

var count = 1;

function write(buf) {
  if (count%2 != 0) {
    count += 1
    this.queue(buf.toString().toLowerCase()+"\n")
  } else {
    count += 1;
    this.queue(buf.toString().toUpperCase()+"\n")
  }
}

var tr = through(write);


process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);