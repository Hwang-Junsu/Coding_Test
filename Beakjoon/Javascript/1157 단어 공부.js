const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase();

let answer = null;
const dict = {};
for (let i = 0; i < input.length; i++) {
  if (!dict[input[i]]) dict[input[i]] = 1;
  else dict[input[i]] += 1;
}
const maxValue = Math.max(...Object.values(dict));

Object.keys(dict).forEach((ch) => {
  if (dict[ch] === maxValue && answer === null) {
    answer = ch;
  } else if (dict[ch] === maxValue && answer !== null) {
    answer = "?";
    return;
  }
});

console.log(answer);
