// process.stdin.pipe(process.stdout);

var through = require('through');

function write(buf) {
  // console.log('buf-', buf);
  this.queue(buf.toString().toUpperCase());
}

var tr = through(write);


//.pipe(tr)
// .pipe(process.stdout);

process.stdin.pipe(tr).pipe(process.stdout);