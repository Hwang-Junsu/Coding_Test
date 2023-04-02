const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input.shift();
const arr = input.map(el=>+el);
let answer = [];

const graph = Array.from({length:n+1}, ()=> 0);
const visited = Array.from({length:n+1}, ()=> false);
const initVisted = () => {
    for(let i = 0 ; i < n+1; i++) {
        visited[i] = false;
    }
}
for(let i = 0; i < n; i++) {
    graph[i+1] = arr[i];
}

const dfs = (v, start, cycle) => {
    if(cycle.length > 0 && v === start) return cycle;
    if(visited[v]) return;
    visited[v] = true;
    const newCycle = [...cycle,v];
    return dfs(graph[v], start, newCycle);
}

for(let i = 1 ; i <= n; i++) {
    initVisted();
    if(i === graph[i]) {
        answer = [...answer, i];
    } else {
        const cycle = dfs(i, i, []);
        if(cycle) {
            answer = [...answer, ...cycle];
        }
    }
}
answer = [... new Set(answer)];
answer.sort((a,b)=>a-b);

console.log(answer.length);
console.log(answer.join('\n'));