var a = process.argv
var b = process.argv.slice(2)
var c = [];
var sum = 0;
for (var key in b){
  c.push(Number(b[key]))
}
function whatever (c){
  for (var i = 0; i < c.length; i++){
    sum += c[i];
  }
  return sum;
}
console.log(whatever(c));
/* Official Solution

var result = 0

   for (var i = 2; i < process.argv.length; i++)
     result += Number(process.argv[i])

   console.log(result)

*/
