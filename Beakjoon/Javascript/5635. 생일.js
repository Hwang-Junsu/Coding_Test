const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


const n = +input.shift();
const arr = input.map(el=> {
    const [name, day, mon, year] = el.split(' ');
    return {name, day:+day, mon:+mon, year:+year}
});

arr.sort((a,b)=>{
    if(a.year > b.year) return 1;
    if(a.year < b.year) return -1;
    if(a.mon > b.mon) return 1;
    if(a.mon < b.mon) return -1;
    if(a.day > b.day) return 1;
    if(a.day < b.day) return -1;
})

console.log(arr[n-1].name)
console.log(arr[0].name);