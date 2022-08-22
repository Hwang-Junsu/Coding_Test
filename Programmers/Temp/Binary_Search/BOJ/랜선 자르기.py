def solution(start, end, array) :
    count = 0
    mid = 0
    ans = 0
    
    while start <= end :
        mid = (start+end)//2
        if mid == 0 :
            mid = 1
        
        for ln in array :
            temp = ln // mid
            count += temp
        
        if count < n :
            end = mid-1
        else :
            start = mid+1
            ans = mid
        count = 0
    return ans

    
k,n = map(int, input().split())
line = []
for i in range(k) :
    num = int(input())
    line.append(num)

line.sort()
start = 0
end = max(line)

print(solution(start, end, line))


# 1. 내 풀이 - 공부했던 parametric search로 해결하는 문제임.
#            - 이진 탐색을 반복하며 최적화된 값을 찾아야 함.
#            - 막혔던 부분은 mid가 0이되는 경우가 생겨 zeroDivisionError 가 발생하였는데, mid의 최솟값을 정해주며 해결함.
