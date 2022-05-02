# 풍선을 기준으로 좌우를 체크해보자.
# 1) 타겟을 기준으로 좌우의 최솟값이 둘다 큰 경우 -> PASS
# 2) 타겟을 기준으로 좌우의 최솟값이 둘다 작은 경우 -> FAIL
# 3) 타겟을 기준으로 좌우의 최솟값이 하나는 작고, 하나는 큰 경우 -> PASS

def solution(a):
    answer = 2
    left = a[0]
    right = a[len(a)-1]
            
    for i in range(1,len(a)-1) :
        if left < a[i] :
            answer += 1
        
        else :
            left = a[i]
            
    
    
    return answer
