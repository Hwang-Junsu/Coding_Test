const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((el) => +el);
const [n, f] = arr;

let answer = "";
const len = String(n).length;
const sliceNumber = [...String(n)].slice(0, len - 2).join("");

for (let i = 0; i < 100; i++) {
    const tailNumber = String(i).padStart(2, "0");
    const addNumber = sliceNumber + tailNumber;
    if (Number(addNumber) % f === 0) {
        answer = tailNumber;
        break;
    }
}

console.log(answer);
