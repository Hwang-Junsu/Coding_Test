const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


const [n, k] = input[0].split(' ').map(el=>+el);
const arr = input[1].split(' ').map(el=>+el);

const solution = (arr) => {
    let count = 0;
    let values = [-1, -1];
    const swap = (idx1, idx2) => {
        count++;
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for(let i = n-1 ; i >= 0; i--) {
        let lowest = i;
        for(let j = i-1; j >= 0; j--) {
            if(arr[lowest] < arr[j]) lowest = j;
        }
        if(lowest !== i) {
            swap(i, lowest);
            if(count === k) {
                values = [arr[lowest], arr[i]];
                break;
            }
        }
    }

    return values;
}

const answer = solution(arr);

console.log(answer[0] === -1 && answer[1] === -1 ? -1 : answer.join(' '));