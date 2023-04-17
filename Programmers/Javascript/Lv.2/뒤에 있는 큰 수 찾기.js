function solution(numbers) {
    const result = Array(numbers.length).fill(-1);
    
    const stack = [];
    
    for(let i = 0 ; i < numbers.length-1; i++) {
        if(numbers[i] < numbers[i+1]) {
            result[i] = numbers[i+1];
            
            while(stack.length) {
                const [number, index] = stack[stack.length-1];
                if(number >= numbers[i+1]) break;
                if(number < numbers[i+1]) {
                    result[index] = numbers[i+1];
                    stack.pop();
                }
            }
            
        } else {
            stack.push([numbers[i], i]);
        }
    }
    
    return result;
}