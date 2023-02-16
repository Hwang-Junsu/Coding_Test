// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   empty() {
//     return this.length === 0 ? 1 : 0;
//   }

//   enqueue(element) {
//     const newNode = new Node(element);
//     if (!this.head) this.head = newNode;
//     else this.tail.next = newNode;

//     this.tail = newNode;
//     this.length++;
//   }

//   dequeue() {
//     if (!this.head) return -1;
//     const data = this.head.data;
//     this.head = this.head.next;
//     this.length--;
//     return data;
//   }

//   getSize() {
//     return this.length;
//   }

//   front() {
//     if (!this.length) return -1;
//     return this.head.data;
//   }

//   back() {
//     if (!this.length) return -1;
//     return this.tail.data;
//   }
// }

// const input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((el) => el.trim());

// const size = +input.shift();
// const map = input.map((el) => el.split(" ").map((el) => +el));

// let pipeDir = 0;
// // dir 0에서 가는 경우는 0, 1 →
// // dir 1에서 가는 경우는 0, 1, 2 ↘
// // dir 2에서 가는 경우는 1, 2 ↓
// const moveIndex = [
//   [
//     [0, 1],
//     [1, 1],
//   ],
//   [
//     [0, 1],
//     [1, 1],
//     [1, 0],
//   ],
//   [
//     [1, 1],
//     [1, 0],
//   ],
// ]; // 현재dir, 가야하는 dir, xy
// let answer = 0;
// const bfs = () => {
//   const queue = new Queue();
//   queue.enqueue([0, 1, pipeDir]);

//   while (!queue.empty()) {
//     const [x, y, currentDir] = queue.dequeue();

//     if (x === size - 1 && y === size - 1) {
//       answer++;
//       continue;
//     }

//     if (currentDir === 0) {
//       for (let i = 0; i < 2; i++) {
//         const nx = x + moveIndex[currentDir][i][0];
//         const ny = y + moveIndex[currentDir][i][1];

//         if (nx >= size || ny >= size) continue;
//         if (map[nx][ny] === 1) continue;
//         if (i === 1 && (map[nx - 1][ny] === 1 || map[nx][ny - 1] === 1))
//           continue;

//         queue.enqueue([nx, ny, i]);
//       }
//     } else if (currentDir === 1) {
//       for (let i = 0; i < 3; i++) {
//         const nx = x + moveIndex[currentDir][i][0];
//         const ny = y + moveIndex[currentDir][i][1];

//         if (nx >= size || ny >= size) continue;
//         if (map[nx][ny] === 1) continue;
//         if (i === 1 && (map[nx - 1][ny] === 1 || map[nx][ny - 1] === 1))
//           continue;

//         queue.enqueue([nx, ny, i]);
//       }
//     } else {
//       for (let i = 0; i < 2; i++) {
//         const nx = x + moveIndex[currentDir][i][0];
//         const ny = y + moveIndex[currentDir][i][1];

//         if (nx >= size || ny >= size) continue;
//         if (map[nx][ny] === 1) continue;
//         if (i === 0 && (map[nx - 1][ny] === 1 || map[nx][ny - 1] === 1))
//           continue;

//         queue.enqueue([nx, ny, i + 1]);
//       }
//     }
//   }
// };

// if (
//   map[size - 1][size - 1] === 1 ||
//   (map[size - 2][size - 1] === 1 && map[size - 1][size - 2] === 1)
// ) {
//   console.log(0);
// } else {
//   bfs();
//   console.log(answer);
// }

const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const size = +input.shift();
const map = input.map((el) => el.split(" ").map((el) => +el));

const dp = Array.from({length: 3}, () =>
  Array.from({length: size}, () => Array.from({length: size}, () => 0))
);

dp[0][0][1] = 1;
for (let i = 2; i < size; i++) {
  if (map[0][i] === 0) {
    dp[0][0][i] = dp[0][0][i - 1];
  }
}

for (let i = 1; i < size; i++) {
  for (let j = 1; j < size; j++) {
    if (map[i][j] === 0 && map[i][j - 1] === 0 && map[i - 1][j] === 0) {
      dp[1][i][j] =
        dp[0][i - 1][j - 1] + dp[1][i - 1][j - 1] + dp[2][i - 1][j - 1];
    }

    if (map[i][j] === 0) {
      dp[0][i][j] = dp[0][i][j - 1] + dp[1][i][j - 1];
      dp[2][i][j] = dp[2][i - 1][j] + dp[1][i - 1][j];
    }
  }
}

console.log(
  dp[0][size - 1][size - 1] +
    dp[1][size - 1][size - 1] +
    dp[2][size - 1][size - 1]
);
