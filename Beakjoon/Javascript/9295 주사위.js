const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = +input[0];
const arr = input.slice(1).map((el) => el.split(" ").map(Number));

arr.forEach((el, idx) => {
  console.log(`Case ${idx + 1}: ${el[0] + el[1]}`);
});
