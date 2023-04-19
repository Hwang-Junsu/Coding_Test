function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    
    let min = Infinity;
    let answer = [0, 0];
    
    while(true) {
        
        if(sum === k) {
            if(right-left < min) {
                min = right-left;
                answer[0] = left;
                answer[1] = right;
            }
        }

        if(sum >= k || right === sequence.length-1) {     
            sum -= sequence[left];
            left++;
        } else if(sum < k){
            right++;
            sum += sequence[right];
        }
        
        if(left === sequence.length && right === sequence.length-1) break;
    }
    
    return answer
}