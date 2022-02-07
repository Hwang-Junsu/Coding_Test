def binary_search(array, target, start, end) :
    if start > end :
        return 0
    mid = (start+end)//2
    
    if array[mid] == target :
        return 1
    elif array[mid] > target :
        return binary_search(array, target, start, mid-1)
    else :
        return binary_search(array, target, mid+1, end)

n = int(input())
arr = list(map(int, input().split()))
arr.sort()
m = int(input())
target = list(map(int, input().split()))

for i in target :
    print(binary_search(arr, i, 0, n-1))
    
    
# 1. 내 풀이 - 이진탐색 알고리즘을 연습하기 위해 처음 풀어본 문제.
#            - 재귀적으로 접근해 보았음.
