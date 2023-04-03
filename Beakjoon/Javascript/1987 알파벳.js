const board = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [r, c] = board.shift().split(' ').map(el=>+el);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let answer = 0;
const visited = {};
for (let i = 0; i < 26; i++) {
    visited[String.fromCharCode(65 + i)] = false;
}

const dfs = (x, y, count) => {
    answer = Math.max(answer, count);

    for(let i = 0 ; i < 4; i++) {
        const nx = x + dx[i]; const ny = y + dy[i];
        if(nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
        if(visited[board[nx][ny]]) continue;
        
        visited[board[nx][ny]] = true;
        dfs(nx, ny, count+1);
        visited[board[nx][ny]] = false;
    }

}

visited[board[0][0]] = true;
dfs(0,0,1);
console.log(answer);