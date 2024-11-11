const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1);

const newArr = arr.map((el) => el.split("").reverse().join(""));

newArr.forEach((el) => console.log(el));
