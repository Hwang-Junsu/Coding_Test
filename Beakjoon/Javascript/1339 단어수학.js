const [n, ...arr] = require("fs")
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());

// 최대가 되려면? N개의 단어중 길이가 가장 긴 단어를 찾는다. => 가장 긴 단어의 가장 맨 앞 숫자는 9 => 전제 오류
// 최대가 되려면? 각 자릿수를 계산해서 가장 큰 자릿수를 가진 값부터 9를 배정.

let answer = 0;
let number = 9;
const digit = {};
const dict = {};

for (let i = 0; i < +n; i++) {
    const word = arr[i];
    for (let j = 0; j < word.length; j++) {
        const alpha = word[j];

        if (!digit[alpha]) {
            digit[alpha] = 10 ** (word.length - j);
        } else {
            digit[alpha] += 10 ** (word.length - j);
        }
    }
}

const alphabets = Object.keys(digit).sort((a, b) => digit[b] - digit[a]);
for (let i = 0; i < alphabets.length; i++) {
    dict[alphabets[i]] = number;
    number--;
}

for (let i = 0; i < +n; i++) {
    const word = arr[i];
    let temp = "";
    for (let j = 0; j < word.length; j++) {
        temp += dict[word[j]];
    }
    answer += +temp;
}

console.log(answer);
