const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());

const answer = [];
for (let i = 0; i < arr.length - 1; i++) {
    const number = arr[i];
    if (number.length === 1) {
        answer.push("yes");
        continue;
    }
    let isPalin = true;
    for (let j = 0; j <= parseInt(number.length / 2); j++) {
        if (number[j] !== number[number.length - 1 - j]) {
            answer.push("no");
            isPalin = false;
            break;
        }
    }
    if (isPalin) answer.push("yes");
}
console.log(answer.join("\n"));
