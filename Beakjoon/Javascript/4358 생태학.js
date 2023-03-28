const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const dict = {};
arr.forEach((el)=>{
    if(!dict[el]) dict[el] = 0;
    dict[el]++;
})
const sum = Object.values(dict).reduce((prev,cur)=>prev + cur, 0);
const trees = Object.keys(dict);

trees.forEach((el)=>
    dict[el] = ((dict[el]*100/sum)).toFixed(4)
)

const info = Object.entries(dict);
info.sort();
info.forEach((el)=>console.log(el.join(' ')));