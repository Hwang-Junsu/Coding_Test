const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const n = +input[0];
const fruits = input[1].split(" ").map((el) => +el);
let fruitType = 0;

const count = {};
fruits.forEach((el) => {
  if (!count[el]) {
    count[el] = 0;
    fruitType += 1;
  }
  count[el] += 1;
});

let start = 0;
let end = n - 1;

function abstractFruit(fruit) {
  count[fruit] -= 1;
  if (count[fruit] === 0) fruitType -= 1;
}

function getFruit(idx) {
  return fruits[idx];
}

function getFruitCount(idx) {
  return count[getFruit(idx)];
}

while (true) {
  if (fruitType <= 2) break;

  console.log("before -> ", fruits.slice(start, end + 1));

  if (getFruitCount(start) > getFruitCount(end)) {
    abstractFruit(getFruit(end));
    end -= 1;
  } else {
    abstractFruit(getFruit(start));
    start += 1;
  }

  console.log("after ->", fruits.slice(start, end + 1));
}

console.log(end - start + 1);
