var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dir, function (err, list) {
  if (err) {
    console.log(err)
  }

  list.forEach(function (file) {
    var ext1 = path.extname(file)
    if (ext === ext1) {
      console.log(file)
    }
  })
})
