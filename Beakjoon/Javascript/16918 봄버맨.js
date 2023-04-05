const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [r, c, n] = input.shift().split(' ').map(el=>+el);
const arr = input.map(el=>[...el]);
const dx = [0,-1, 0, 1, 0]; const dy = [0,0, 1, 0, -1];
const boom = Array.from({length:r}, ()=>Array.from({length:c}, ()=>false));

function boomCheck () {
    for(let i = 0 ; i < r; i++) {
        for(let j = 0; j < c; j++) {
            if(arr[i][j] === "O") boom[i][j] = true;
        }
    }
}
function analyze() {
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            if(boom[i][j]) {
                for(let k = 0; k < 5; k++) {
                    const nx = i + dx[k]; const ny = j + dy[k];
                    if(nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
                    arr[nx][ny] = ".";
                }
                boom[i][j] = false;
            }

        }
    }
}
function fillBoom () {
    for(let i = 0 ; i < r; i++) {
        for(let j = 0 ; j < c; j++) {
            if(arr[i][j] === ".") arr[i][j] = "O";
        }
    }
}
let count = 0;
while(count !== n) {
    switch(count % 2) {
        case 0 : {
            analyze();
            break;
        }
        case 1 : {
            boomCheck();
            fillBoom();
            break;
        }
    }
    count++;
}

arr.forEach(el=>console.log(el.join('')))

