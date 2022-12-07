const arr = require("fs")
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .trim()
    .split("\n");

// N극은 0, S극은 1
const gears = [
    [...arr[0]].map((el) => +el),
    [...arr[1]].map((el) => +el),
    [...arr[2]].map((el) => +el),
    [...arr[3]].map((el) => +el),
];
const k = Number(arr[4]);
let answer = 0;

const clockwiseRotate = (arr) => {
    arr.unshift(arr.pop());
};

const counterClockwiseRotate = (arr) => {
    arr.push(arr.shift());
};

const visited = [false, false, false, false];

for (let i = 5; i < k + 5; i++) {
    const [rotateGear, direction] = arr[i].split(" ").map((el) => +el);
    const gear = rotateGear - 1;
    const rotate = [0, 0, 0, 0]; // 0은 가만히, 1은 시계, -1은 반시계
    rotate[gear] = direction;
    const rotateStack = [gear];

    while (rotateStack.length !== 0) {
        const current = rotateStack.pop();
        if (visited[current]) continue;
        visited[current] = true;

        if (current === 0) {
            if (gears[current][2] !== gears[current + 1][6]) {
                rotate[current + 1] = rotate[current] === -1 ? 1 : -1;

                if (!visited[current + 1]) rotateStack.push(current + 1);
            }
        }
        if (current === 1) {
            if (gears[current][6] !== gears[current - 1][2]) {
                rotate[current - 1] = rotate[current] === -1 ? 1 : -1;
                if (!visited[current - 1]) rotateStack.push(current - 1);
            }
            if (gears[current][2] !== gears[current + 1][6]) {
                rotate[current + 1] = rotate[current] === -1 ? 1 : -1;
                if (!visited[current + 1]) rotateStack.push(current + 1);
            }
        }
        if (current === 2) {
            if (gears[current][6] !== gears[current - 1][2]) {
                rotate[current - 1] = rotate[current] === -1 ? 1 : -1;
                if (!visited[current - 1]) rotateStack.push(current - 1);
            }
            if (gears[current][2] !== gears[current - 1][2]) {
                rotate[current + 1] = rotate[current] === -1 ? 1 : -1;
                if (!visited[current + 1]) rotateStack.push(current + 1);
            }
        }
        if (current === 3) {
            if (gears[current][6] !== gears[current - 1][2]) {
                rotate[current - 1] = rotate[current] === -1 ? 1 : -1;
                if (!visited[current - 1]) rotateStack.push(current - 1);
            }
        }
    }

    for (let i = 0; i < rotate.length; i++) {
        if (rotate[i] === 1) clockwiseRotate(gears[i]);
        if (rotate[i] === -1) counterClockwiseRotate(gears[i]);
    }
}

for (let i = 0; i < 4; i++) {
    if (i === 0 && gears[i][0] === 1) answer += 1;
    if (i === 1 && gears[i][0] === 1) answer += 2;
    if (i === 2 && gears[i][0] === 1) answer += 4;
    if (i === 3 && gears[i][0] === 1) answer += 8;
}

console.log(answer);

// a톱니바퀴를 회전시켰을 때 옆에있는 톱니바퀴와 맞닿은 극이 다르다면 (a[2] !== b[6]);
// b는 a와 회전한 방향 반대로 연쇄적으로 돌아간다.
// 만약 맞닿은 극이 같다면 회전하지 않는다.
