var inputFile = process.argv[2];

var fs = require('fs');

fs.createReadStream(inputFile)
  .pipe(process.stdout);