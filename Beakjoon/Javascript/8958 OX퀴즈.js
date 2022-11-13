const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const scoreChecker = (str) => {
  let total = 0;
  let score = 1;
  [...str].forEach((ch) => {
    if (ch === "O") {
      total += score++;
    } else {
      score = 1;
    }
  });
  return total;
};

for (let i = 0; i < +n; i++) {
  console.log(scoreChecker(arr[i]));
}
