const [s, p] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

let answer = 0;
const pLen = p.length;
const sLen = s.length;

for (let i = 0; i < pLen; ) {
  let max = 0;
  for (let j = 0; j < sLen; j++) {
    let count = 0;
    while (p[i + count] === s[j + count]) {
      if (!p[i + count] || !s[j + count]) break;
      count++;
    }
    max = Math.max(max, count);
  }
  i += max;
  answer++;
}

console.log(answer);
