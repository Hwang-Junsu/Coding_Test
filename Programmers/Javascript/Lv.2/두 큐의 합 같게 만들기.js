function solution(queue1, queue2) {
    const queueSum = (queue) => {
        return queue.reduce((sum, cur) => {
            return sum + cur;
        }, 0);
    };

    const queue = [...queue1, ...queue2, ...queue1, ...queue2];
    let sum1 = queueSum(queue1);
    let sum2 = queueSum(queue2);
    let range1 = [0, queue1.length - 1];
    let range2 = [queue1.length, queue1.length + queue2.length - 1];

    for (let i = 0; i < queue.length * 4; i++) {
        if (sum1 === sum2) return i;
        if (sum1 < sum2) {
            sum2 -= queue[range2[0]];
            range1[1] += 1;
            range2[0] += 1;
            sum1 += queue[range1[1]];
        } else if (sum1 > sum2) {
            sum1 -= queue[range1[0]];
            range1[0] += 1;
            range2[1] += 1;
            sum2 += queue[range2[1]];
        }
    }

    return -1;
}
