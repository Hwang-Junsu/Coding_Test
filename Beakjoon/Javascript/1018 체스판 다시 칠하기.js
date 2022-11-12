const [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const a = Number(n.split(" ")[0]);
const b = Number(n.split(" ")[1]);
let answer = 2501;

const findBoard = (board, sx, sy) => {
    let minValue = 2501;
    for (let r = 0; r < 2; r++) {
        let current = r === 0 ? "W" : "B";
        let count = 0;

        for (let i = sx; i < sx + 8; i++) {
            current = current === "W" ? "B" : "W";
            for (let j = sy; j < sy + 8; j++) {
                current = current === "W" ? "B" : "W";
                if (board[i][j] !== current) count++;
            }
        }
        minValue = Math.min(count, minValue);
    }
    return minValue;
};

for (let k = 0; k <= a - 8; k++) {
    for (let l = 0; l <= b - 8; l++) {
        answer = Math.min(findBoard(arr, k, l), answer);
    }
}
