const arr = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [n, x] = arr[0].split(" ").map((el) => +el);
const numbers = arr[1].split(" ").map((el) => +el);

// 구해야 하는 것 x일 동안의 방문자수 최대값, 최대값이 나온 횟수

let sum = 0;
let count = {};
for (let i = 0; i < x; i++) {
  sum += numbers[i];
}
let max = sum;
count[sum] = 1;

for (let i = x; i < n; i++) {
  sum = sum - numbers[i - x] + numbers[i];
  if (max <= sum) {
    max = sum;
    count[max] = (count[max] || 0) + 1;
  }
}

console.log(max === 0 ? "SAD" : max);
if (max) console.log(count[max]);
