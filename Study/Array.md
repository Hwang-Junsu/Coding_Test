# Big-O 관점에서의 배열과 객체

## Object

- 객체는 정렬되어 있지 않은 key : value 형태의 자료형태이다.
- Insertion, Removal, Access 모두 상수시간 (O(1))
- Searching은 선형 (O(N))

- Object.keys, Object.values, Object.entries은 선형 시간 O(N)
- Object.hasOwnProperty는 상수시간 - O(1)

## Array

- 객체와 달리 데이터가 정렬이 되어있다.
- Access 는 상수시간 (O(1))
- 배열의 맨 뒤에 데이터를 추가하는 것은 객체와 같이 상수시간이 소요된다.
- 하지만 맨 앞에 데이터를 추가하는 경우라면, index를 다시 설정해야하기 때문에 선형시간이 소요된다.

아래는 메소드 별 Big-O

- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N\*logN)
- forEach/map/filter/reduce/etc... - O(N)
