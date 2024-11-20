const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [first, second] = input;

// 맞물렸을때를 판단?

// 길이가 가장 짧게

const fLen = first.length;
const sLen = second.length;
const min = fLen + sLen;

const long = fLen > sLen ? first : second;
const short = fLen <= sLen ? second : first;

// 이 반복문은 두 기어를 비교하는 반복문 하나는 움직이지 않고 가만히.

function compare(start, end) {
  for (let i = 0; i < fLen; i++) {
    for (let j = start; j < end; j++) {
      if (+long[i] + +short[j] !== 3) return false;
    }
  }
  return true;
}
