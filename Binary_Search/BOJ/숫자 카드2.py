import sys
from bisect import bisect_left, bisect_right

n = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))
arr.sort()
m = int(sys.stdin.readline())
target = list(map(int, sys.stdin.readline().split()))

for x in target :
    print(bisect_right(arr,x) - bisect_left(arr, x), end =  " ")
    
    
# 1. 내 풀이 - 처음에는 이진탐색으로 하나씩 구해서 cnt를 한다음 remove를 이용해 답을 도출해 내었음.
#            - 리스트의 remove 함수가 시간복잡도 O(N) 이기 때문에 시간초과가 발생함
#            - bisect를 이용한 갯수 탐색을 공부했던 것이 생각나서 bisect 함수를 이용해 해결함.
