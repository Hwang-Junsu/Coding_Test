function solution(input_string) {
    
    // 연속되는 문자를 먼저 제거
    const arr = [input_string[0]];
    
    for(let i = 1; i < input_string.length; i++) {
        if(arr[arr.length-1] !== input_string[i]) arr.push(input_string[i]);
    }
    
    const hash = {};
    
    for(let i = 0 ; i < arr.length; i++) {
        if(!hash[arr[i]]) hash[arr[i]] = 0;
        hash[arr[i]]++
    }
    
    const answer = [];
    const keys = Object.keys(hash);
    
    keys.forEach(key => {
        if(hash[key] >= 2) answer.push(key);
    })
    answer.sort();
    
    return answer.length === 0 ? "N" : answer.join('');
}