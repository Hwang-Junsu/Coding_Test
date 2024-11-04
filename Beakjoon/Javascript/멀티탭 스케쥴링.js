const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [nk, input2] = input.split('\n') 

const [n, k] = nk.split(' ').map((el)=>+el);
const arr = input2.split(' ').map(el=>+el)

const count = {}
arr.forEach((el) => {
    if(!count[el]) count[el] = 0;
    count[el] += 1;
})
let answer = 0;

const tap = {};

// 플러그 넣기
function insertTap(plug) {
    count[plug]--;
    tap[plug] = true;
}

// 플러그 빼기
function removeTap(plug) {
    answer++
    delete tap[plug]
}

// 하나씩 멀티탭에 꽂을지 뺼지 판단 (Greedy 현재의 최선의 수)
for(let i = 0 ; i < k ; i++) {
    const tabKeys = Object.keys(tap).map(el => +el);
    const tabLength = tabKeys.length

    const current = arr[i];

    // 멀티 탭에 꽂을 구멍이 있음 (처음 넣을때)
    if(tabLength < n) {
        insertTap(current);
        continue
    }

    // 현재 플러그가 이미 꽂혀있으면 넘어가기
    if(tabKeys.includes(current)) {
        count[current]--;
        continue;
    }
    else {
        let remove = null;
        let d = {}
        // 꽂혀있는 플러그에서 가장 늦게 출현하는 원소 찾기
        for(let j = 0 ; j < tabLength; j++) {
            const t = tabKeys[j];
            let findFlag = false;
            for(let l = i + 1; l < k; l++) {
                if(arr[l] === t) {
                    d[t] = l;
                    findFlag = true;
                    break;
                }
            }
            if(!findFlag) {
                remove = t;
                break;
            }
        }
         Object.keys(d).forEach((el) => {
                    if(!remove) {
                        remove = el;
                    } else {
                        remove = d[el] > d[remove] ? el : remove;
                    }
        })
        insertTap(current);
        removeTap(remove)
        
    }

}

console.log(answer);
