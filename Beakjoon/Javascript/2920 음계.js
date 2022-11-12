const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

const scale = input.map((el) => +el);

const ascending = (arr) => {
    for (let i = 1; i <= 8; i++) {
        if (arr[i - 1] !== i) return false;
    }
    return true;
};

const descending = (arr) => {
    for (let i = 1; i <= 8; i++) {
        if (arr[i - 1] !== 9 - i) return false;
    }
    return true;
};

console.log(
    ascending(scale) ? "ascending" : descending(scale) ? "descending" : "mixed"
);
