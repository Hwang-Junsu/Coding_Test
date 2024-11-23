const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input.map(BigInt);

console.log([a + b, a - b, a * b].join("\n"));
