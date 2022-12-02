const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const a = arr.map((el) => +[...el].reverse().join(""));
console.log(a[0] > a[1] ? a[0] : a[1]);
