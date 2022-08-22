# fs module

```javascript
// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
var fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서
// Array로 저장된다.
var input = fs.readFileSync("/dev/stdin").toString().split(" "); // 제출용
var input = fs.readFileSync("input.txt").toString().split(" "); // 풀기용

// input에서 지정한 value를 읽어와 다른 변수로 선언하고 활용
// toString메소드로 지금은 string이기 때문에, parseInt로 숫자로 형태변환을 해준다.
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
```

- 백준 밖에서 풀어볼때는 input값을 담은 txt파일을 만들어서 readFileSync에 담으면 된다. 백준에서는 /dev/stdin을 넣으면 된다.

# use readline

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const input = line.split(" ");
  const result = Number(input[0]) + Number(input[1]);
  console.log(result);

  rl.close();
}).on("close", () => {
  process.exit();
});
```

- fs모듈이 더 빠르다. readline을 이용해 시간초과가 난다면 fs모듈을 이용해보자.
- line에 할당되는 것이 입력값이며 문자열로 할당이 된다.
- 입력을 원하는만큼 받기 위해서는 특정 조건에 rl.close()를 추가해주면 된다.

# Submit

```javascript
function solution(C, inputTestCase) {
  /**
   * 문제 풀이
   */
  console.log("정답출력");
}
```
