let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [a,b,c] = input.split(" ").map((el)=>+el)


console.log((a+b)%c)
console.log(((a%c)+(b%c))%c)
console.log((a*b)%c)
console.log(((a%c)*(b%c)%c))