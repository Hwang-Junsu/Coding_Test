function solution(plans) {
    const result = [];
    
    for(let i = 0 ; i < plans.length; i++) {
        const [subject, start, duration] = plans[i];
        const time = start.split(":").map(el=>+el);
        plans[i][1] = +time[0]*60+time[1];
        plans[i][2] = +duration;
    }
    plans.sort((a,b) => b[1] - a[1]);
    const init = plans[plans.length-1][1];
    const stack = [];
    let t = init
    while(true) {
        
        if(plans.length === 0 && stack.length === 0) break;
        
        let subject, start, duration;
        if(plans.length) [subject, start, duration] = plans[plans.length-1];
        
        if(t === start) {
            stack.push(plans.pop());
        }
        
        if(stack.length !== 0) stack[stack.length-1][2] -= 1;
        if(stack.length !== 0 && stack[stack.length-1][2] === 0) {
            const values = stack.pop();
            result.push(values[0]);
        }
        t++
    }
    
    
    return result;
}