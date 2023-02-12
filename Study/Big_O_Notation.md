# Big-O Notation

## 빅오 표기법의 필요성

- 여러가지 코드를 일반적으로 서로 비교하고 성능을 평가하는 방법.
- 코드의 성능을 얘기할 때 정확한 전문용어를 사용하는 것이 중요하다.
- 빅오를 이해하게 되면 문제가 어디서 나타나는지 찾기 쉬울 수 있다.

```
// Code1
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

addUpTo(1000);
```

```
// Code2
function addUpTo(n) {
    return n*(n+1) /2;
}

addUpTo(6);
```

- 아래 두 코드는 모두 1부터 n까지 더한 합을 리턴하는 함수이다.
- 2가지 해결법은 모두 옳다는 것을 알고 있지만 "더 나은" 것이 무엇을 의미할까?

- 속도(faster)
- 메모리의 사용양(memory)
- 읽기 쉬운 것(readable)

```
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}


let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`)
```

```
function addUpTo(n) {
    return n*(n+1) /2;
}

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`)
```

- 위 두 코드는 addUpTo은 같고, 같은 큰 수를 입력해서 호출하고 걸린시간을 출력한다.
- 이 때, 첫번째의 코드에서는 약 1.24초의 시간이 나오지만, 두번째 코드에서는 거의 0초에 가까운 시간이 나온다.
- 하지만, 두 코드가 속도로 봤을때 얼마나 더 좋은지 비교를 할 수 없다.
- 우선 기기마다 다른 방식으로 시간을 기록하고, 그 기기에 무엇이 실행되고 있는지에 따라서 시간이 다를 수 있다.
- 이렇게 불확실한 부분이 없이 서로의 속도를 비교하는 특정한 값이 필요할 때는 빅오 표기법이 유용한 것이다.

## 빅오 표기법 ?

- 코드의 성능을 비교할 때는 실제로 걸린 시간이 아닌, 컴퓨터가 하는 연산의 횟수에 집중해야한다.
- 빅오는 정식으로 입력된 내용이 늘어날수록 알고리즘 실행시간이 어떻게 변하는지 설명하는 방식이다.
- Code 1의 경우 n이 추가될 수록 연산이 n만큼 커지기 때문에 `O(n)`, Code 2의 경우 n에 따라 연산의 반복이 커지지 않아 `O(1)`이라고 표현할 수 있다.
- 빅오 표기법에서는 상수는 중요하지 않고 연산이 얼마나 커지느냐에 따른 추세에 집중해야 한다.
- 예를들어, O(2n+1)이라는 연산횟수가 있어도, 상수인 2와 1은 중요하지 않다는 것이다. (결국 O(n)으로 표기.)

## Big-O Graph

<p align="center">
<img src="https://t1.daumcdn.net/cfile/tistory/99EF1E395C7EB4B601"/>
