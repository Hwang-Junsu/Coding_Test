const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ");
const arr = input[1].split(" ").map((el) => +el);

arr.sort((a, b) => b - a);

const numbers = [];
const findNumber = (temp) => {
  if (temp.length === n.length) {
    const a = +temp.join("");
    if (a <= +n) {
      numbers.push(a);
    }
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    findNumber([arr[i], ...temp]);
  }
};

findNumber([]);

console.log(
  numbers.length === 0
    ? (arr[0] + "").repeat(n.length - 1)
    : Math.max(...numbers)
);
