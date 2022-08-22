def solution(start, end, length) :
    mid = 0
    ans = 0
    while start <= end :
        mid = (start+end) // 2
        res = 0
        for x in length :
            if x > mid :
                res += (x-mid)
        if res < m :
            end = mid-1
        else :
            start = mid+1
            ans = mid
    
    return ans

n,m = map(int, input().split())
length = list(map(int, input().split()))
length.sort()

start = 0
end = max(length)
print(solution(start,end,length))

# 1. 내 풀이 - 이진탐색을 통해 최적화된 값을 찾는 문제임.
#            - 조건문의 순서를 잘 판단해야 최소,최대값에 오답이 나오지 않을 것 같다.
