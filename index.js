const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m, r] = input
  .shift()
  .split(" ")
  .map((el) => +el);

const arr = input.map((el) => el.split(" ").map((el) => +el));

const rotateArray = (arr, n, m) => {
  const count = Math.min(n, m) / 2;

  for (let i = 0; i < count; i++) {
    const row = n - i - 1;
    const col = m - i - 1;
    const save = arr[i][i];

    for (let j = i; j < col; j++) {
      arr[i][j] = arr[i][j + 1];
    }
    for (let j = i; j < row; j++) {
      arr[j][col] = arr[j + 1][col];
    }
    for (let j = col; j > i; j--) {
      arr[row][j] = arr[row][j - 1];
    }
    for (let j = row; j > i; j--) {
      arr[j][i] = arr[j - 1][i];
    }
    arr[i + 1][i] = save;
  }
};

for (let i = 0; i < r; i++) {
  rotateArray(arr, n, m, r);
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].join(" "));
}
