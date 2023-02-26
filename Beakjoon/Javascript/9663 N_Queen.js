const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = +input;

const check = (queen, row) => {
  for (let i = 0; i < row; i++) {
    if (queen[row] === queen[i] || Math.abs(queen[i] - queen[row]) === row - i)
      return false;
  }
  return true;
};
const nQueen = (queen, row) => {
  let answer = 0;

  if (row === n) return 1;

  for (let i = 0; i < n; i++) {
    queen[row] = i;
    if (check(queen, row)) answer += nQueen(queen, row + 1);
  }

  return answer;
};

console.log(
  nQueen(
    Array.from({ length: n }, () => 0),
    0
  )
);
