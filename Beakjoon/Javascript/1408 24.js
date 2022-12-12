const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const start = arr[0];
const end = arr[1];

const hourToSecond = (time) => {
    const temp = time.split(":").map((el) => +el);
    return temp[0] * 60 * 60 + temp[1] * 60 + temp[2];
};

const secondToHour = (second) => {
    if (second < 0) second += 60 * 60 * 24;
    let hour = parseInt(second / (60 * 60)) % 24;
    let minute = parseInt((second - hour * 60 * 60) / 60) % 60;
    let sec = parseInt(second % 60);
    return [
        String(hour).padStart(2, "0"),
        String(minute).padStart(2, "0"),
        String(sec).padStart(2, "0"),
    ].join(":");
};

console.log(secondToHour(hourToSecond(end) - hourToSecond(start)));
