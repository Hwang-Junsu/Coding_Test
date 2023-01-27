const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((el) => el.trim());
const dict = {};

const initDict = () => {
  for (let i = 0; i < 26; i++) {
    dict[String.fromCharCode(i + 97)] = [];
  }
};

for (let i = 0; i < n * 2; i += 2) {
  initDict();
  const str = arr[i];
  const k = +arr[i + 1];
  for (let i = 0; i < str.length; i++) {
    dict[str[i]].push(i);
  }
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < 26; i++) {
    const alpha = String.fromCharCode(97 + i);
    if (dict[alpha].length < k) continue;

    for (let j = 0; j <= dict[alpha].length - k; j++) {
      let start = j;
      let end = j + k - 1;
      let sum = dict[alpha][end] - dict[alpha][start] + 1;
      min = Math.min(sum, min);
      max = Math.max(sum, max);
    }
  }

  if (min === Infinity && max === 0) console.log(-1);
  else {
    console.log(`${min} ${max}`);
  }
}
