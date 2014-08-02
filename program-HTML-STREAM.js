var trumpet = require('trumpet');
var tr = trumpet();

var through = require('through');

function write(buf) {
  // console.log('buf-', buf);
  this.queue(buf.toString().toUpperCase());
}

var toUppTr = through(write);



var src = process.stdin;

var dst = process.stdout;

var selectStream = tr.select('.loud').createStream();

selectStream.pipe(toUppTr).pipe(selectStream);

// , function(stuff) {
//   stuff.createStream().pipe(toUppTr).pipe(dst);
// })

src.pipe(tr).pipe(dst);

