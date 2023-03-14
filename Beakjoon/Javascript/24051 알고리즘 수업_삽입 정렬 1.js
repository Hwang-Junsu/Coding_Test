const [input1, input2] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input1.split(' ').map(el => +el);
const a = input2.split(' ').map(el=>+el);


function insertionSort(arr) {
    let count = 0;
    let answer = -1;
    for(let i = 1; i < n; i++) {
        const currentValue = arr[i];
        let j;
        for(j = i-1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
            count++;
            if(count === k) {
                answer = arr[j];
                break;
            }
        }
        if(count === k) break;
        if(j+1 !== i) {
            arr[j+1] = currentValue;
            count++;
        }
        if(count === k) {
            answer = currentValue;
            break;
        }
    }
    return answer;
}

const answer = insertionSort(a);

console.log(answer);
