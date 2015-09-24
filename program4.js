//console.log(process.argv)
var fs = require('fs')
fs.readFile(process.argv[2], utf8,function someFunction (){
  var lines = process.argv[2].split('\n').length - 1
  return lines
})
