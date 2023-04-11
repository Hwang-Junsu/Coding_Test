function solution(n, stations, w) {
    let answer = 0;
    let index = 1;
    const len = 2*w + 1;
    stations.forEach((station)=> {
        const range = station - w - index;
        answer += Math.ceil(range / len);
        index = station + w +1;
    })

    if(index <= n) answer += Math.ceil((n - index + 1) / len)
    

    return answer;
}