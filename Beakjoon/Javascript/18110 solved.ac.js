const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, ...arr] = input.map((el) => +el);

const solution = () => {
  if (n === 0) return 0;
  const exclude = Math.round(n * (15 / 100));
  arr.sort((a, b) => a - b);
  const origin = arr.slice(exclude, arr.length - exclude);
  const answer = Math.round(origin.reduce((a, b) => a + b, 0) / origin.length);
  return answer;
};

console.log(solution());
