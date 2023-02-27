const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(el=>el.split(' ').map(el=>+el));

const findSecondNumber = (arr) => {
    arr.sort((a,b)=>b-a);
    return arr[1]
}


const polling = (n,matrix) => {

    if(matrix.length === 1) return matrix[0][0];
    const newMatrix = [];
    for(let i = 0 ; i < n; i+=2) {
        const temp = [];
        for(let j =0 ; j <n; j+=2) {
            temp.push(findSecondNumber([matrix[i][j], matrix[i+1][j], matrix[i][j+1], matrix[i+1][j+1]]));
        }
        newMatrix.push(temp);
    }
    return polling(n/2,newMatrix)
}

console.log(polling(n, arr));