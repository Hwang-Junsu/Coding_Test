const [input1, input2] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const answer = [];
const [l, c] = input1.split(" ").map((el) => +el);
const chars = input2.split(" ").sort();
const vowels = ["a", "e", "i", "o", "u"];

function makePassword(char, index, len, vowel, consonant) {
  if (len === l) {
    if (vowel > 0 && consonant > 1) answer.push(char);
    return;
  }

  for (let i = index; i < c; i++) {
    if (char.includes(chars[i])) continue;
    if (vowels.includes(chars[i]))
      makePassword(char + chars[i], i, len + 1, vowel + 1, consonant);
    else makePassword(char + chars[i], i, len + 1, vowel, consonant + 1);
  }
}

makePassword("", 0, 0, 0, 0);

console.log(answer.join("\n"));
