const [time, n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [hour, minute] = time.split(" ").map((el) => +el);
const c = Number(n);

const minuteToHour = (m) => {
  return [parseInt(m / 60) % 24, m % 60];
};

const hourToMinute = (h, m) => {
  return h * 60 + m;
};

const timeConvert = (h, m) => {
  return minuteToHour(hourToMinute(h, m) + c);
};

console.log(...timeConvert(hour, minute));
