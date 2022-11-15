const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [n, m, v] = arr[0].split(" ").map((el) => +el);
let answer = [];
const graph = {};

for (let i = 1; i <= n; i++) {
    graph[i] = [];
}
for (let i = 1; i <= m; i++) {
    const [f, t] = arr[i].split(" ").map((el) => +el);
    graph[f].push(t);
    graph[t].push(f);
}

Object.keys(graph).forEach((el) => graph[String(el)].sort((a, b) => a - b));

let visited = Array.from({length: n + 1}, () => false);
const init = () => {
    visited = Array.from({length: n + 1}, () => false);
    answer = [];
};

const dfs = (graph, visited, vt) => {
    if (visited[vt]) return;
    visited[vt] = true;
    answer.push(vt);
    graph[String(vt)].forEach((el) => dfs(graph, visited, el));
};
const bfs = (graph, visited, start) => {
    visited[start] = true;
    const queue = [];
    queue.push(start);

    while (queue.length !== 0) {
        const v = queue.shift();
        answer.push(v);
        graph[String(v)].forEach((el) => {
            if (visited[el]) return;
            queue.push(el);
            visited[el] = true;
        });
    }
};

dfs(graph, visited, v);
console.log(answer.join(" "));

init();
bfs(graph, visited, v);
console.log(answer.join(" "));
