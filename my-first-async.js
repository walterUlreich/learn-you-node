var fs = require('fs')

var commandArg = process.argv[2]

var theFile = fs.readFile(commandArg, 'utf-8', function(err, data) {
  if (err) {
    return console.log(err)
  }
  var file = data.split('\n')
  console.log(file.length - 1)
})
