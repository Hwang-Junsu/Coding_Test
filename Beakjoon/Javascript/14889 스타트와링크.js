const [input1, ...input2] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input1;
const stats = input2
  .map((el) => el.trim())
  .map((el) => el.split(" ").map((el) => +el));

const teams = [];
const people = [];
let min = Infinity;
for (let i = 1; i <= n; i++) {
  people.push(i);
}

const divideTeam = (person, team) => {
  if (person > n) return;
  if (team.length === Math.floor(n / 2)) {
    teams.push(team);
    return;
  }

  for (let i = person; i <= n; i++) {
    if (!team.includes(i)) divideTeam(i, [...team, i]);
  }
};

divideTeam(1, []);

const calcStat = (arr) => {
  let stat = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      stat += stats[arr[i] - 1][arr[j] - 1] + stats[arr[j] - 1][arr[i] - 1];
    }
  }
  return stat;
};

for (let i = 0; i < Math.floor(teams.length / 2); i++) {
  min = Math.min(
    Math.abs(calcStat(teams[i]) - calcStat(teams[teams.length - 1 - i])),
    min
  );
}

console.log(min);
