function solution(board) {
    let result = 0;
    let start, end;
    for(let i = 0 ; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === "R") start = [i ,j];
            if(board[i][j] === "G") end = [i, j];
        }
    }
    
    
    const bfs = (start, end) => {
        const dx = [-1, 0, 1, 0]; const dy = [0, 1, 0, -1];
        const visited = Array.from({length: board.length}, ()=>Array(board[0].length).fill(0));
        
        const [sx, sy] = start;
        const [ex, ey] = end;
        const queue = [];
        visited[sx][sy] = 1;
        queue.push([sx, sy]);
        
        while(queue.length) {
            const [x, y] = queue.shift();
            for(let i = 0 ; i < 4; i++) {
                let nx = x; let ny = y;
                
                while(true) {
                    nx = nx + dx[i]; ny = ny + dy[i];
                    if(nx < 0 || ny < 0 || nx >= board.length || ny >= board[0].length) {
                        nx = nx - dx[i]; ny = ny - dy[i];
                        break;
                    };
                    if(board[nx][ny] === "D") {
                        nx = nx - dx[i]; ny = ny - dy[i];
                        break;
                    }
                }
                
                
                if(visited[nx][ny] === 0) {
                    visited[nx][ny] = visited[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
            
        }
        
        return visited[ex][ey];
    }
    
    result = bfs(start, end);
    
    return result === 0 ? -1 : result-1;
}