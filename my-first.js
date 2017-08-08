var fs = require('fs')

var theFile = fs.readFileSync(process.argv[2], 'utf-8')

var splitFile = theFile.split('\n')

console.log(splitFile.length - 1)
