const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr.pop();

let answer = [];

const recursion = (cur, max, arr, numbers) => {
    if(arr.length === max) {
        answer.push(arr);
        return;
    }

    for(let i = cur ; i < numbers.length; i++) {
        const newArr = [...arr];
        newArr.push(numbers[i]);
        recursion(i+1, max, newArr, numbers);
    }
}


for(let i = 0 ; i < arr.length; i++) {
    answer = [];
    const numbers = arr[i].split(' ').map(el=>+el);
    const n = numbers.shift();    
    recursion(0, 6, [], numbers);
    answer.forEach((arr)=>console.log(arr.join(' ')));
    console.log('');
}
