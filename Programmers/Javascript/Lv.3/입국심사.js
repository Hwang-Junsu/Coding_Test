function solution(n, times) {
    times.sort((a,b)=>a-b);

    let left = 1;
    let right = times[times.length-1] * n;
    let mid = Math.floor((left + right)/2);

    while(left < right) {
        let count = 0;
        for(let i = 0; i < times.length; i++) {
            const value = Math.floor(mid / times[i]);
            if(value === 0) break;
            count += value;
            if(count > n) break;
        }

        if(count < n) {
            left = mid + 1;
        } else {
            right = mid;
        }
        mid = Math.floor((left + right)/2);
    }
    return mid
}