const  a = require('readline');
var r1 = a.createInterface({input : process.stdin , output : process.stdout});
r1.question("give input",function(digit,){

let msg = digit-1;
console.log(msg);
process.exit();

});

