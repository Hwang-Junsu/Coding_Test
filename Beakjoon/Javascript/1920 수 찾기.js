const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const a = input[1].split(" ").map((el) => +el);
const m = +input[2];
const numbers = input[3].split(" ").map((el) => +el);

a.sort((a, b) => a - b);

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      return 1;
    }
  }
  return 0;
};
let answer = [];
for (let i = 0; i < m; i++) {
  answer.push(binarySearch(a, numbers[i]));
}

console.log(answer.join("\n"));
