function solution(board) {
    let answer = 1;
    
    const gameOver = (tic) => {
        if(board[0][0] === board[1][1] &&
           board[1][1] === board[2][2] && 
           board[2][2] === tic) return true;
        if(board[0][0] === board[0][1] &&
           board[0][1] === board[0][2] &&
           board[0][2] === tic) return true;
        if(board[0][0] === board[1][0] && 
           board[1][0] === board[2][0] &&
           board[2][0] === tic) return true;
        if(board[1][0] === board[1][1] &&
           board[1][1] === board[1][2] &&
           board[1][2] === tic) return true;
        if(board[2][0] === board[2][1] &&
           board[2][1] === board[2][2] &&
           board[2][2] === tic) return true;
        if(board[0][1] === board[1][1] &&
           board[1][1] === board[2][1] &&
           board[2][1] === tic) return true;
        if(board[0][2] === board[1][2] &&
           board[1][2] === board[2][2] &&
           board[2][2] === tic) return true;
        if(board[0][2] === board[1][1] &&
           board[1][1] === board[2][0] &&
           board[2][0] === tic) return true; 
        return false;
    }
    
    const countTic = () => {
        let x = 0;
        let o = 0;
        for(let i = 0 ; i < 3 ; i++) {
            for(let j = 0 ; j < 3; j++) {
                if(board[i][j] === "O") o++;
                if(board[i][j] === "X") x++;
            }
        }
        return {o, x}
    }
    
    const {o, x} = countTic();
    if(gameOver("O") && x >= o) answer = 0;
    if(gameOver("X") && o > x) answer = 0;
    if(x < o-1) answer = 0;
    if(x > o) answer = 0;
    
    return answer;
}