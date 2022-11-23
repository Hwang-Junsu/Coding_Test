// 소수 판별 (return true ? false)
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num >= 2;
}

// 조합 계산(return arr)
function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1);
        // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((el) => [fixed, ...el]);
        //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached);
        // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

// 순열 계산(return arr)
function Permutation(arr, r) {
    const result = [];
    if (r === 1) return arr.map((num) => [num]);
    arr.forEach((fixed, index, org) => {
        const rest = [...org.slice(0, index), ...org.slice(index + 1)];
        const permutation = Permutation(rest, r - 1);
        const attached = permutation.map((numbers) => [fixed, ...numbers]);
        result.push(...attached);
    });
    return result;
}

// 큐
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    empty() {
        return this.length === 0 ? 1 : 0;
    }

    enqueue(element) {
        const newNode = new Node(element);
        if (!this.head) this.head = newNode;
        else this.tail.next = newNode;

        this.tail = newNode;
        this.length++;
    }

    dequeue() {
        if (!this.head) return -1;
        const data = this.head.data;
        this.head = this.head.next;
        this.length--;
        return data;
    }

    getSize() {
        return this.length;
    }

    front() {
        if (!this.length) return -1;
        return this.head.data;
    }

    back() {
        if (!this.length) return -1;
        return this.tail.data;
    }
}
