import sys

n = int(sys.stdin.readline())
house = list(map(int, sys.stdin.readline().split()))
dist = [i+1 for i in range(max(house))]
house.sort()

ans = house[(n-1)//2]
print(ans)

# 1. 내 풀이 - house 리스트에서 중간값을 기준으로 안테나를 세워야 최소값이 가능함.
#            - n//2 - 1.. 
