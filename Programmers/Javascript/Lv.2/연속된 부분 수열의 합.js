function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = 0;
    
    while(left < right) {
        if(sum < k) {
            sum += sequence[right];
            right++;
        } else if(sum > k){
            sum -= sequence[left];
            left++;
        } else {
            break;
        }
    }
    
    return [left , right]
}