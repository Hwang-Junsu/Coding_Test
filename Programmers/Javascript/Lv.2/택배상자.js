function solution(order) {
    let answer = 0;
    const myOrder = order.reverse();
    const arr = Array.from({length: order.length}, (v, i) => order.length - i);
    const container = [];
    let box = myOrder.pop();

    while (true) {
        if (container.length > 0) {
            if (container[container.length - 1] === box) {
                container.pop();
                box = myOrder.pop();
                answer++;
                continue;
            }
            if (arr.length === 0) {
                break;
            }
        }
        if (arr.length === 0 && container.length === 0) break;

        let current = arr.pop();

        if (current === box) {
            answer++;
            box = myOrder.pop();
        } else {
            container.push(current);
        }
    }

    return answer;
}
