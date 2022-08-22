import sys

n = int(sys.stdin.readline())

arr = [0] * 10001

for i in range(n) :
   num = int(sys.stdin.readline())
   arr[num] += 1

for i in range(10001) :
    if arr[i] != 0 :
        for j in range(arr[i]) :
            print(i)
            
# 1. 내 풀이 - 계수 정렬을 사용해야 하는 문제임. 메모리가 제한적이어서 범위에 맞게 설정해 주어야 함.
#            - 10000 이하의 자연수만 나올 수 있기에 10001 까지의 배열을 만들어 주고, 해당 넘버가 나올때마다 해당 배열 index에 값을 1씩 더해준다.
#            - 배열의 값이 0이라면 출력할 필요가 없기에 조건문을 설정해주고 출력해준다.
