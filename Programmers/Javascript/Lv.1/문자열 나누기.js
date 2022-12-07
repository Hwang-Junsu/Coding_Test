function solution(s) {
    let answer = 0;
    let start = ""; let startCount = 0; let otherCount = 0;
    
    for(let i = 0 ; i < s.length; i++) {
        
        if(startCount === 0 && otherCount === 0) {
            start = s[i];
        }
        
        if(s[i] !== start) {
            otherCount++;
        } else {
            startCount++;
        }
        
        if(otherCount === startCount) {
            answer++; otherCount = 0; startCount = 0;
        }
    }
    return startCount !== 0 ? answer+1 : answer;
    
}