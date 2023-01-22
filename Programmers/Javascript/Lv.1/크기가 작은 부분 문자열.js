function solution(t, p) {
    let answer = 0;
    const len = p.length;
    
    for(let i = 0 ; i < t.length - len + 1; i++) {
        const number = +t.slice(i, i+len);
        if(number <= +p) answer++; 
    }
    return answer;
}