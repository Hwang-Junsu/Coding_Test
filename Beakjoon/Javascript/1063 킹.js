const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [k, s, n] = input[0].split(" ");
const arr = input.slice(1);

const dict = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
};

// 왕 1, 돌 2
const board = Array.from({ length: 8 }, () =>
  Array.from({ length: 8 }, () => 0)
);

function convertIndex(str) {
  const [x, y] = str.split("");
  return [9 - y - 1, dict[x]];
}

function reverseIndex(arr) {
  const [x, y] = arr;
  const mapping = Object.keys(dict);
  return mapping[y] + (9 - x - 1 + "");
}

function initLocation() {
  const [kx, ky] = convertIndex(k);
  const [sx, sy] = convertIndex(s);
  board[kx][ky] = 1;
  board[sx][sy] = 2;

  return [kx, ky, sx, sy];
}

function simulation() {
  initLocation();
  const dir = {
    R: [0, 1],
    L: [0, -1],
    B: [1, 0],
    T: [-1, 0],
    RT: [-1, 1],
    LT: [-1, -1],
    RB: [1, 1],
    LB: [1, -1],
  };

  const [kx, ky, sx, sy] = initLocation();

  let currentKing = [kx, ky];
  let currentStone = [sx, sy];

  for (let i = 0; i < +n; i++) {
    const [dx, dy] = dir[arr[i]];

    const knx = currentKing[0] + dx;
    const kny = currentKing[1] + dy;

    const snx = currentStone[0] + dx;
    const sny = currentStone[1] + dy;

    const isColide = currentStone[0] === knx && currentStone[1] === kny;

    if (knx < 0 || kny < 0 || knx >= 8 || kny >= 8) continue;
    if (isColide) {
      if (snx < 0 || sny < 0 || snx >= 8 || sny >= 8) continue;
      currentStone = [snx, sny];
    }
    currentKing = [knx, kny];
  }

  return {
    king: reverseIndex(currentKing),
    stone: reverseIndex(currentStone),
  };
}

const { king, stone } = simulation();

console.log(king);
console.log(stone);
