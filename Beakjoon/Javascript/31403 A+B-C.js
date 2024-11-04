const [a,b,c] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

console.log((+a) + (+b) - (+c))
console.log(a+b-c)
