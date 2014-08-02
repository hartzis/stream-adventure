var request = require('request');
var r = request.post('http://localhost:8000/');


var src = process.stdin;
var dst = process.stdout;

src.pipe(r).pipe(dst);