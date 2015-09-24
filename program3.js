var fs = require('fs')
var myFilePath = process.argv[2]
function fileToArray (myFilePath) {
  var fileRead = fs.readFileSync(myFilePath)
  var str = fileRead.toString();
  var newArray = str.split('\n');
  return newArray.length - 1;
}
console.log(fileToArray(myFilePath))
/*Official Solution

var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

*/
