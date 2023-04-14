function solution(maps) {
    const col = maps.length;
    const row = maps[0].length;
    let start = null;
    let lever = null;
    let exit = null;
    
    for(let i = 0 ; i < col; i++) {
        for(let j = 0 ; j < row; j++) {
            if(maps[i][j] === "S") start = [i, j];
            if(maps[i][j] === "L") lever = [i, j];
            if(maps[i][j] === "E") exit = [i, j];
        }
    }
    const dx = [-1, 0, 1, 0];
    const dy = [0 ,1, 0, -1];
    // 시작지점에서 레버까지의 거리 + 레버에서 도착지까지의 거리
    
    const bfs = (start, end) => {
        const visited = Array.from({length: col}, ()=>Array.from({length: row}, ()=> 0));
        const [sx, sy] = start;
        const [ex, ey] = end;
        const queue = [];
        visited[start] = 1;
        
        queue.push([sx, sy]);
        
        while(queue.length) {
            const [x, y] = queue.shift();
            if(x === ex && y === ey) break;
            for(let i = 0 ; i < 4; i++) {
                const nx = dx[i] + x;
                const ny = dy[i] + y;
                
                if(nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
                if(maps[nx][ny] === "X") continue;
                if(visited[nx][ny] < 1) {
                    visited[nx][ny] = visited[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
        return visited[ex][ey];
    }
    
    const startToLever = bfs(start, lever);
    const leverToExit = bfs(lever, exit);
    
    if(!startToLever || !leverToExit) return -1;
    return startToLever + leverToExit;
    
}