const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((el) => +el);

let answer = 0;
if (arr[0] === arr[1] && arr[1] === arr[2]) answer = 10000 + arr[0] * 1000;
else if (arr[0] === arr[1] && arr[1] !== arr[2])
    answer = 1000 + Math.max(arr[0], arr[1]) * 100;
else if (arr[0] !== arr[1] && arr[1] === arr[2])
    answer = 1000 + Math.max(arr[1], arr[2]) * 100;
else if (arr[0] === arr[2] && arr[2] !== arr[1])
    answer = 1000 + Math.max(arr[0], arr[2]) * 100;
else if (arr[0] !== arr[1] && arr[1] !== arr[2])
    answer = Math.max(arr[0], arr[1], arr[2]) * 100;

console.log(answer);
