const [input, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = Number(input);
const people = [];
let winner = 0;
let winnerScore = 0;
for (let i = 0; i < n; i++) {
  people.push(arr[i].split(" ").map((el) => +el));
}

const findCardSum = (arr) => {
  let maxValue = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      for (let k = j + 1; k < 5; k++) {
        maxValue = Math.max(maxValue, (arr[i] + arr[j] + arr[k]) % 10);
        if (maxValue === 9) return 9;
      }
    }
  }
  return maxValue;
};

for (let t = 0; t < n; t++) {
  const sum = findCardSum(people[t]);
  if (winnerScore <= sum) {
    winnerScore = sum;
    winner = t + 1;
  }
}

console.log(winner);
