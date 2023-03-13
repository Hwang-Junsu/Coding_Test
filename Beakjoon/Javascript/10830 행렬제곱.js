const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, b] = input.shift().split(' ').map(el=>+el);
const arr = input.map(el=>el.split(' ').map(el=>(+el)%1000));

const matrixTimes = (matrix1, matrix2, n) => {
    const newMatrix = Array.from({length:n},()=>Array.from({length:n},()=>0));
    for(let y = 0; y < n; y++) {
        for(let x = 0; x < n; x++) {
            let sum = 0;
            for(let i = 0; i < n; i++) {
                sum += (matrix1[y][i] * matrix2[i][x])
            }
            newMatrix[y][x] = sum%1000;
        }
    }
    return newMatrix
}

const solution = (arr, count) => {

    let newMatrix = Array.from({length:n},(_,y)=>Array.from({length:n},(_,x)=>x===y ? 1 : 0));
    let matrix = arr.map(v=>[...v]);

    while(count) {
        if(count % 2 === 1) {
            newMatrix = matrixTimes(newMatrix, matrix, n);
            count--;
        }
        matrix = matrixTimes(matrix, matrix, n);
        count = Math.floor(count/2);


    }
    return newMatrix;
}


const answer = solution(arr, b)

for(let i = 0; i < n; i++) {
    console.log(answer[i].join(' '));
}