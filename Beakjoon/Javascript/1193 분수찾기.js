const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);

if (n === 1) console.log("1/1");
else {
    let c = 1;

    while (n > c) {
        n -= c;
        c++;
    }
    c++;
    if ((c - 1) % 2 === 1) console.log(`${c - n}/${n}`);
    else console.log(`${n}/${c - n}`);
}
