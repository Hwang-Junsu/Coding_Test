const arr = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = arr
  .shift()
  .split(" ")
  .map((el) => +el);

const office = arr.map((el) => el.split(" ").map((el) => +el));
const board = Array.from({length: n}, () => Array.from({length: m}, () => 0));

// 동 0, 남 1, 서 2, 북 3
const cctv = {
  1: [[0], [1], [2], [3]],
  2: [
    [0, 2],
    [1, 3],
  ],
  3: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  4: [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ],
  5: [[1, 2, 3, 4]],
};
const supervise = (map, sx, sy, dir) => {
  if (dir === 0) {
    for (let i = sy; i < m; i++) {
      if (office[sx][i] === 6) break;
      map[sx][i] = 1;
    }
  } else if (dir === 1) {
    for (let i = sx; i < n; i++) {
      if (office[i][sy] === 6) break;
      map[i][sy] = 1;
    }
  } else if (dir === 2) {
    for (let i = sx; i >= 0; i--) {
      if (office[sx][i] === 6) break;
      map[i][sy] = 1;
    }
  } else {
    for (let i = sx; i >= 0; i--) {
      if (office[i][sy] === 6) break;
      map[i][sy] = 1;
    }
  }
};

// 모든 경우를 check해줄 Logic 필요함.

const hasCctv = []; // (x, y)에 몇번 cctv가 있다.
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (office[i][j] > 0 && office[i][j] < 6) {
      hasCctv.push([i, j, office[i][j]]);
    }
  }
}

console.log(hasCctv);

const check = (cctv, map) => {
  const [x, y, type] = cctv;
  switch (type) {
    case 1: {
      supervise(map, x, y, 0);
      supervise(map, x, y, 1);
      supervise(map, x, y, 2);
      supervise(map, x, y, 3);
    }
    case 2: {
    }
    case 3: {
    }
    case 4: {
    }
    case 5: {
    }
  }
};
