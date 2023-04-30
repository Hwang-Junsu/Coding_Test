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

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m ,t] = input.shift().split(' ');
const castle = input.map(el=>el.split(' ').map(el=>+el));
const findSword = () => {
    for(let i = 0 ; i < n; i++) {
        for(let j = 0 ; j < m; j++) {
            if(castle[i][j] === 2) return [i, j];
        }
    }
}

const bfs = (sx, sy, ex, ey, hasSword) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const visited = Array.from({length: n}, ()=>Array.from({length: m}, ()=> 0));
    visited[sx][sy] = 1;
    const queue = new Queue();
    queue.enqueue([sx, sy]);
    while(!queue.empty()) {
        const [x, y] = queue.dequeue();

        for(let i = 0 ; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            if(visited[nx][ny] > 0) continue;
            if(castle[nx][ny] === 1 && !hasSword) continue;

            visited[nx][ny] = visited[x][y] + 1;
            queue.enqueue([nx, ny]);
        }
    }
    return visited[ex][ey]-1;
}

const [swx, swy] = findSword();

const direct = bfs(0, 0, n-1, m-1, false);

const startToSword = bfs(0,0,swx,swy,false);
const swordToEnd = bfs(swx, swy, n-1, m-1, true);
const goThrogh = startToSword > 0 && swordToEnd > 0 ? startToSword + swordToEnd : -1;

let answer = 0;

if(direct === -1 && goThrogh > 0) answer = goThrogh;
else answer = Math.min(direct, goThrogh);

console.log(answer === -1 || answer > t ? 'Fail' : answer);