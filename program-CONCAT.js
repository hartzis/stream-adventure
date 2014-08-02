var concat = require('concat-stream');

var through = require('through');

var split = require('split');

var reverse = concat(function(body) {
  process.stdout.end(body.toString().split('').reverse().join(''))
})

// var tr = through(reverse);


process.stdin.pipe(reverse);