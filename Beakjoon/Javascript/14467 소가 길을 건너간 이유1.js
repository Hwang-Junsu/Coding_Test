const [n, ...arr] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const cows = arr.map((el) =>
  el
    .trim()
    .split(" ")
    .map((el) => +el)
);

let answer = 0;
const check = {};
for (let i = 1; i <= 10; i++) {
  check[i] = -1;
}

for (let i = 0; i < +n; i++) {
  const [num, location] = cows[i];

  if (check[num] === -1) {
    check[num] = location;
    continue;
  } else if (
    (check[num] === 0 && location === 1) ||
    (check[num] === 1 && location === 0)
  ) {
    check[num] = location;
    answer++;
  }
}

console.log(answer);
