const arr = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const inputs = [
  arr
    .shift()
    .split("")
    .map((el) => +el),
  arr
    .shift()
    .split("")
    .map((el) => +el),
  arr
    .shift()
    .split("")
    .map((el) => +el),
  arr
    .shift()
    .split("")
    .map((el) => +el),
];
const k = +arr.shift();
const rotate = arr.map((el) => el.split(" ").map((el) => +el));

class Gear {
  constructor(state) {
    this.state = state;
  }
  rightValue() {
    return this.state[2];
  }
  leftValue() {
    return this.state[6];
  }
  topValue() {
    return this.state[0];
  }
  clockDirectionRotate() {
    this.state.unshift(this.state.pop());
  }
  counterClockDirectionRotate() {
    this.state.push(this.state.shift());
  }
}

class Gears {
  constructor(gears, order) {
    this.gears = gears.map((gear) => new Gear(gear));
    this.order = order;
  }
  orderStack = []; // 돌아가야하는 오더들의 목록 ([기어숫자, 방향])
  workStack = [];
  visited = [false, false, false, false];
  point = 0;

  work(gear, dir) {
    // 방향에 따라 기어를 돌린다.
    if (dir === 1) {
      this.gears[gear].clockDirectionRotate();
    } else {
      this.gears[gear].counterClockDirectionRotate();
    }
  }

  leftCheck(gear, dir) {
    // 왼쪽 기어를 확인한다.
    if (gear - 1 < 0) return;
    if (this.visited[gear - 1]) return;
    if (this.gears[gear - 1].rightValue() !== this.gears[gear].leftValue()) {
      dir === -1
        ? this.orderStack.push([gear - 1, 1])
        : this.orderStack.push([gear - 1, -1]);
    }
  }
  rightCheck(gear, dir) {
    // 오른쪽 기어를 확인한다.
    if (gear + 1 > 3) return;
    if (this.visited[gear + 1]) return;
    if (this.gears[gear].rightValue() !== this.gears[gear + 1].leftValue()) {
      dir === -1
        ? this.orderStack.push([gear + 1, 1])
        : this.orderStack.push([gear + 1, -1]);
    }
  }

  check(start, dir) {
    this.orderStack.push([start, dir]);
    while (this.orderStack.length > 0) {
      const [gear, dir] = this.orderStack.shift();
      this.visited[gear] = true;
      this.leftCheck(gear, dir);
      this.rightCheck(gear, dir);

      this.workStack.push([gear, dir]);
    }
  }

  do() {
    while (this.workStack.length > 0) {
      const [gear, dir] = this.workStack.shift();
      this.work(gear, dir);
    }
    this.visited = [false, false, false, false];
  }

  countPoint() {
    for (let i = 0; i < this.gears.length; i++) {
      if (this.gears[i].topValue() === 1) {
        this.point += 2 ** i;
      }
    }
  }

  print() {
    console.log(this.gears);
  }
}

const gears = new Gears(inputs);

for (let i = 0; i < rotate.length; i++) {
  gears.check(rotate[i][0] - 1, rotate[i][1]);
  gears.do();
}
gears.countPoint();

console.log(gears.point);
