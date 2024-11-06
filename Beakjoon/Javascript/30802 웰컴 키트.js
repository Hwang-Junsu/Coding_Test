const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +arr[0];
const application = arr[1].split(" ").map((el) => +el);
const [t, p] = arr[2].split(" ").map((el) => +el);

let answer = 0;

application.forEach((el) => {
  answer += Math.ceil(el / t);
});

console.log(answer);
console.log(Math.floor(n / p), n % p);
