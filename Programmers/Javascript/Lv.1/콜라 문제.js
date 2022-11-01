function solution(a, b, n) {
    let answer = 0;
    let remain = 0;
    
    const divide = (cur, a, b) => {
        if(cur < a) return;
        
        answer += parseInt(cur/a) * b;
        remain = cur % a;
        divide(parseInt(cur/a)* b + remain, a, b);
    }
    
    divide(n, a, b);
    
    return answer;
}