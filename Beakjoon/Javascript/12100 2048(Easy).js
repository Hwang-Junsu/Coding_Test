const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


const n = +input.shift();
const board = input.map(el=>el.split(' ').map(el=>+el));
let answer = 0;

const direction = ["LEFT", "RIGHT", "UP", "DOWN"];

function moveBlocks(board, length, dir) {
    const newBoard = board.map(v => [...v]);
    switch(dir) {
        case "LEFT" : 
            for(let i = 0; i < length; i++) {
                for(let j = 0; j < length; j++) {
                    if(newBoard[i][j] === 0) {
                        for(let k = j+1; k < length; k++) {
                            if(newBoard[i][k] !== 0) {
                                newBoard[i][j] = newBoard[i][k];
                                newBoard[i][k] = 0;
                                j-= 1;
                                break;
                            }
                        }
                    } else {
                        for(let k = j+1; k < length; k++) {
                            if(newBoard[i][k] === newBoard[i][j]) {
                                newBoard[i][j] = newBoard[i][k]*2;
                                newBoard[i][k] = 0;
                                break;
                            }
                            else if(newBoard[i][k] !== 0) break;
                        }
                    }
                }
            }
            break;
  
        case "RIGHT" : 
            for(let i = 0; i < length; i++) {
                for(let j = length-1; j >= 0; j--) {
                    if(newBoard[i][j] === 0) {
                        for(let k = j-1; k >= 0; k--) {
                            if(newBoard[i][k] !== 0) {
                                newBoard[i][j] = newBoard[i][k];
                                newBoard[i][k] = 0;
                                j++;
                                break;
                            }
                        }
                    } else {
                        for(let k = j-1; k >= 0; k--) {
                            if(newBoard[i][k] === newBoard[i][j]) {
                                newBoard[i][j] = newBoard[i][k]*2;
                                newBoard[i][k] = 0;
                                break;
                            }
                            else if(newBoard[i][k] !== 0) break;
                        }
                    }
                }
            }
            break;
        
        case "UP" : 
            for(let j = 0; j < length; j++) { //  y
                for(let i = 0; i < length; i++) { // x
                    if(newBoard[i][j] === 0) {
                        for(let k = i+1; k < length; k++) {
                            if(newBoard[k][j] !== 0) {
                                newBoard[i][j] = newBoard[k][j];
                                newBoard[k][j] = 0;
                                i--;
                                break;
                            }
                        }
                    } else {
                        for(let k = i+1; k < length; k++) {
                            if(newBoard[k][j] === newBoard[i][j]) {
                                newBoard[i][j] = newBoard[k][j]*2;
                                newBoard[k][j] = 0;
                                break;
                            }
                            else if(newBoard[k][j] !== 0) break;
                        }
                    }
                }
            }
            break;
        
        case "DOWN" : 
            for(let j = 0; j < length; j++) { //  y
                for(let i = length-1; i >= 0; i--) { // x
                    if(newBoard[i][j] === 0) {
                        for(let k = i-1; k >= 0; k--) {
                            if(newBoard[k][j] !== 0) {
                                newBoard[i][j] = newBoard[k][j];
                                newBoard[k][j] = 0;
                                i++;
                                break;
                            }
                        }
                    } else {
                        for(let k = i-1; k >= 0; k--) {
                            if(newBoard[k][j] === newBoard[i][j]) {
                                newBoard[i][j] = newBoard[k][j]*2;
                                newBoard[k][j] = 0;
                                break;
                            }
                            else if(newBoard[k][j] !== 0) break;
                        }
                    }
                }
            }
            break;
        
        default : break;
    }
    return newBoard;
}

function findMaxValue (board) {
    let max = 0;
    for(let i = 0 ; i < n; i++) {
        max = Math.max(max, Math.max(...board[i]));
    }
    return max;
}

function simulate(board, count) {
    if(count >= 5) {
        answer = Math.max(answer, findMaxValue(board));
        return;
    }

    for(let i = 0 ; i < 4; i++) {
        const newBoard = moveBlocks(board, n, direction[i]);
        simulate(newBoard, count+1);
    }
}

simulate(board, 0);


console.log(answer);