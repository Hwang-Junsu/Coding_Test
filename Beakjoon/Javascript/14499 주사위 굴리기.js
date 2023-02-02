const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [n, m, y, x, k] = input
  .shift()
  .split(" ")
  .map((el) => +el);

const orders = input
  .pop()
  .split(" ")
  .map((el) => +el);

const map = input.map((el) => el.split(" ").map((el) => +el));

class Dice {
  constructor(front, back, left, right, ceil, ground) {
    this.front = front;
    this.back = back;
    this.left = left;
    this.right = right;
    this.ground = ground;
    this.ceil = ceil;
  }

  rollDice(dir) {
    let temp = 0;
    temp = this.ceil;
    if (dir === 1) {
      this.ceil = this.left;
      this.left = this.ground;
      this.ground = this.right;
      this.right = temp;
    }
    if (dir === 2) {
      this.ceil = this.right;
      this.right = this.ground;
      this.ground = this.left;
      this.left = temp;
    }
    if (dir === 3) {
      this.ceil = this.front;
      this.front = this.ground;
      this.ground = this.back;
      this.back = temp;
    }
    if (dir === 4) {
      this.ceil = this.back;
      this.back = this.ground;
      this.ground = this.front;
      this.front = temp;
    }
  }

  paintGround(value) {
    this.ground = value;
  }
}

let cx = x;
let cy = y;
const dy = [0, 0, -1, 1];
const dx = [1, -1, 0, 0];

const newDice = new Dice(0, 0, 0, 0, 0, 0);

for (let i = 0; i < k; i++) {
  const nx = cx + dx[orders[i] - 1];
  const ny = cy + dy[orders[i] - 1];
  if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

  newDice.rollDice(orders[i]);
  if (map[ny][nx] === 0) {
    map[ny][nx] = newDice.ground;
  } else {
    newDice.paintGround(map[ny][nx]);
    map[ny][nx] = 0;
  }

  console.log(newDice.ceil);

  cx = nx;
  cy = ny;
}

// 문제를 잘 읽어보자..
