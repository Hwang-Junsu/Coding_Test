const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = input.map((el) => +el);

const solution = (n) => {
  if (n === 1) return "-";

  let newStr = "";
  const divideThree = Math.floor(n / 3);

  newStr += solution(divideThree);
  newStr += " ".repeat(divideThree);
  newStr += solution(divideThree);

  return newStr;
};

for (let i = 0; i < arr.length; i++) {
  console.log(solution(3 ** arr[i]));
}
