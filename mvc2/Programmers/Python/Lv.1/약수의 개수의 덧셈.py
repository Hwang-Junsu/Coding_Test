
def solution(left, right):
    answer = 0
    count = 0
    for i in range(left, right+1) :
        count = 0
        for j in range(1, i+1) :
            if i%j == 0 :
                count += 1
        if count % 2 == 1 :
            answer -= i
        else :
            answer += i
        
    
    
    return answer
    
    
# 1. 내 풀이 - 시간 복잡도 O(N).. 효율적인 방법은 아님.
