function divideCount(n) {
    let count = 0;
    for (let i = 1; i <= n ** 0.5; i++) {
        if (i ** 2 === n) count++;
        else if (n % i === 0) count += 2;
    }

    return count;
}

function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        const num = divideCount(i);
        if (num <= limit) answer += num;
        else answer += power;
    }

    return answer;
}
