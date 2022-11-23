function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num >= 2;
}
const getCombinations = function (arr, selectNumber) {
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
};

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

function solution(numbers) {
    let answer = 0;
    const num = new Set();
    for (let i = 1; i < numbers.length + 1; i++) {
        const arr = Permutation([...numbers], i);
        for (j = 0; j < arr.length; j++) {
            const number = Number(arr[j].join(""));
            if (isPrime(number)) {
                num.add(number);
            }
        }
    }

    return num.size;
}
