const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const deleteNode = +input[2];

const tree = Array(n)
  .fill()
  .map(() => []);
let root;

for (let i = 0; i < n; i++) {
  if (arr[i] === -1) {
    root = i;
    continue;
  }
  tree[arr[i]].push(i);
}

let answer = 0;

function countLeaf(node) {
  if (node === deleteNode) return;

  let child = tree[node];
  let isLeaf = true;

  for (let i = 0; i < child.length; i++) {
    if (child[i] !== deleteNode) {
      isLeaf = false;
      countLeaf(child[i]);
    }
  }

  if (isLeaf) answer++;
}

countLeaf(root);
console.log(answer);
