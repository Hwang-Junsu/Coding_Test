const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const students = input.slice(1, n + 1).map((line) => line.split(" "));
const queries = input.slice(n + 1);

const prefs = {};

students.forEach((student) => {
  addToMap(student[0], student[1], student[2]);
  addToMap("-", student[1], student[2]);
  addToMap(student[0], "-", student[2]);
  addToMap(student[0], student[1], "-");
  addToMap("-", "-", student[2]);
  addToMap("-", student[1], "-");
  addToMap(student[0], "-", "-");
  addToMap("-", "-", "-");
});

function addToMap(sub, fruit, color) {
  const key = `${sub} ${fruit} ${color}`;
  prefs[key] = (prefs[key] || 0) + 1;
}

// 각 쿼리에 대한 결과 출력
const result = queries.map((query) => prefs[query] || 0);
console.log(result.join("\n"));
