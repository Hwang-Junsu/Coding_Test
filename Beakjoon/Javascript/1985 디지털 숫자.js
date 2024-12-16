const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((el) => el.split(" "));

function isFriends(x, y) {
  const dictX = new Set(x);
  const dictY = new Set(y);
  return (
    [...dictX].every((n) => dictY.has(n)) &&
    [...dictY].every((n) => dictX.has(n))
  );
}

function almostFriends(x, y) {
  let nums = x.split("");

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < "9" && nums[i + 1] > "0") {
      nums[i] = String(Number(nums[i]) + 1);
      nums[i + 1] = String(Number(nums[i + 1]) - 1);
      if (nums[0] !== "0" && isFriends(nums.join(""), y)) return true;
      nums[i] = String(Number(nums[i]) - 1);
      nums[i + 1] = String(Number(nums[i + 1]) + 1);
    }

    if (nums[i] > "0" && nums[i + 1] < "9") {
      nums[i] = String(Number(nums[i]) - 1);
      nums[i + 1] = String(Number(nums[i + 1]) + 1);
      if (nums[0] !== "0" && isFriends(nums.join(""), y)) return true;
      nums[i] = String(Number(nums[i]) + 1);
      nums[i + 1] = String(Number(nums[i + 1]) - 1);
    }
  }
  return false;
}

for (let i = 0; i < arr.length; i++) {
  const [a, b] = arr[i];

  if (isFriends(a, b)) {
    console.log("friends");
  } else if (almostFriends(a, b) || almostFriends(b, a)) {
    console.log("almost friends");
  } else {
    console.log("nothing");
  }
}
