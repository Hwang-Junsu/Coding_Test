function solution(babbling) {
    let answer = 0;
    const can = ["aya", "ye", "woo", "ma"]
    const cant = ["ayaaya", "yeye", "woowoo", "mama"]
    
    for(let i = 0 ; i < babbling.length; i++) {
        
        let isPossible = false;
        
        for(let j = 0; j < can.length; j++) {
            
            if(babbling[i].includes(cant[j])) continue;
            
            while(babbling[i].includes(can[j])) {
                babbling[i] = babbling[i].replace(can[j], "1");
            }
            
        }

        for(let k = 0; k < babbling[i].length; k++) {
            if(babbling[i][k] !== "1") {
                isPossible = false;
                break;
            } else {
                isPossible = true;
            }
        }
        if(isPossible) answer++;
    }
    
    return answer;
}