const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const n = +input[0];
const fruits = input[1].split(" ").map((el) => +el);

// 가능한 과일 [1,2,3,4,5,6,7,8,9]

const solution = () => {
  if (n < 2) return n;
  let max = 0;
  let start = 0;
  let end = start + 1;
  const count = {};
  let fruitType = 0;

  const abstractFruit = (fruit) => {
    count[fruit] -= 1;
    if (count[fruit] === 0) fruitType -= 1;
  };
  const addFruit = (fruit) => {
    if (!count[fruit]) {
      count[fruit] = 0;
      fruitType += 1;
    }
    count[fruit] += 1;
  };

  addFruit(fruits[start]);
  addFruit(fruits[end]);

  while (true) {
    if (end === n) break;
    if (start >= end) break;
    // fruitType이 2보다 초과인 경우 start++
    // fruitType이 2보다 이하인 경우 end++

    if (fruitType <= 2) {
      max = Math.max(max, end - start + 1);
    }

    if (fruitType > 2) {
      abstractFruit(fruits[start]);
      start++;
    } else {
      end++;
      addFruit(fruits[end]);
    }
  }

  return max;
};

console.log(solution());
