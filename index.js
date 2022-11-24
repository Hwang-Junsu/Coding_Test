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

const clockwiseRotate = (arr) => {
  arr.unshift(arr.pop());
};

const counterClockwiseRotate = (arr) => {
  arr.push(arr.shift());
};

for (let i = 5; i < k + 5; i++) {
  const [rotateGear, direction] = arr[i].split(" ").map((el) => +el);
  const rotate = [0, 0, 0, 0];
  const isSame = [
    [false, false],
    [false, false],
    [false, false],
    [false, false],
  ];
  rotate[rotateGear - 1] = direction;
  for (let i = 0; i < 3; i++) {
    if (gears[i][2] === gears[i + 1][6]) {
      isSame[i][1] = true;
      isSame[i + 1][0] = true;
    }
  }
  console.log("hi");
}

// a톱니바퀴를 회전시켰을 때 옆에있는 톱니바퀴와 맞닿은 극이 다르다면 (a[2] !== b[6]);
// b는 a와 회전한 방향 반대로 연쇄적으로 돌아간다.
// 만약 맞닿은 극이 같다면 회전하지 않는다.
