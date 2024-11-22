const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.sort((a, b) => a.length - b.length);

const [short, long] = input;

// 이 반복문은 두 기어를 비교하는 반복문 하나는 움직이지 않고 가만히.

function compare(ls, le, ss, se) {
  console.log(ls, le, ss, se);
  for (let i = ls; i < le; i++) {
    for (let j = ss; j < se; j++) {
      if (+long[i] + +short[j] !== 3) return false;
    }
  }
  return true;
}

function solution(l, s) {
  let ls = 0;
  let le = 0;
  let ss = s.length;
  let se = s.length;
  let min = l.length + s.length;

  while (true) {
    if ((le === l.length) & (ss === 0) & (se > 1)) {
      se--;
    }
    if ((le >= s.length) & (ls <= l.length - 2)) {
      ls++;
    }
    if (le < l.length) {
      le++;
    }
    if (ss > 0) {
      ss--;
    }
    // console.log(ls, le, ss, se);
    if (compare(ls, le, ss, se)) {
      min = Math.min(min, Math.abs(s.length - se - ss));
    }

    if (se === 1 && ss === 0 && le === l.length && ls === l.length - 1) {
      break;
    }
  }

  return min;
}

console.log(solution(long, short));

// se - ss = 진입한 짧은 기어의 길이
// ss = 아직 진입하지 않은 짧은기어의 길이
// s.length - se - ss = 밖으로 나간 기어의 길이

// 10 5 길이라고 가정
// ls  le  ss  se
// 0   1   4   5
// 0   2   3   5
// 0   3   2   5
// 0   4   1   5
// 0   5   0   5
// 1   6   0   5
// 2   7   0   5
// 3   8   0   5
// 4   9   0   5
// 5   10  0   5
// 6   10  0   4
// 7   10  0   3
// 8   10  0   2
// 9   10  0   1

// 10 3 길이라고 가정
// ls  le  ss  se
// 0   1   2   3
// 0   2   1   3
// 0   3   0   3
// 1   4   0   3
// 2   5   0   3
// 3   6   0   3
// 4   7   0   3
// 5   8   0   3
// 6   9   0   3
// 7   10  0   3
// 8   10  0   2
// 9   10  0   1

// 3 3 길이라고 가정
// ls  le  ss  se
// 0   1   2   3
// 0   2   1   3
// 0   3   0   3
// 1   3   0   2
// 2   3   0   1
