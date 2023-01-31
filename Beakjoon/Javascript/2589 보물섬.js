class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    empty() {
        return this.length === 0 ? 1 : 0;
    }

    enqueue(element) {
        const newNode = new Node(element);
        if (!this.head) this.head = newNode;
        else this.tail.next = newNode;

        this.tail = newNode;
        this.length++;
    }

    dequeue() {
        if (!this.head) return -1;
        const data = this.head.data;
        this.head = this.head.next;
        this.length--;
        return data;
    }

    getSize() {
        return this.length;
    }

    front() {
        if (!this.length) return -1;
        return this.head.data;
    }

    back() {
        if (!this.length) return -1;
        return this.tail.data;
    }
}

const arr = require("fs")
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());

const [m, n] = arr
    .shift()
    .split(" ")
    .map((el) => +el);
const map = arr.map((el) => el.split(""));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const visited = Array.from({length: m}, () =>
    Array.from({length: n}, () => -1)
);
let maximum = 0;
const initVisited = () => {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            visited[i][j] = -1;
        }
    }
};

const bfs = (sx, sy) => {
    initVisited();
    if (map[sx][sy] === "W") return;
    visited[sx][sy] = 0;

    const queue = new Queue();
    queue.enqueue([sx, sy]);

    while (!queue.empty()) {
        const [x, y] = queue.dequeue();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            if (visited[nx][ny] !== -1) continue;
            if (map[nx][ny] === "W") continue;

            visited[nx][ny] = visited[x][y] + 1;
            maximum = Math.max(visited[nx][ny], maximum);
            queue.enqueue([nx, ny]);
        }
    }
};

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        bfs(i, j);
    }
}

console.log(maximum);

// bfs 브루트포스 문제
// L인 지점을 기준으로 BFS 탐색을 하여, 가장 멀리 간 지점의 값을 maximum 변수에 저장한다.
