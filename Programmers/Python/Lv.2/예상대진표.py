def solution(n,a,b):
    answer = 1
        
    if a + b == 3 :
        return answer
        
    if a > b  :
        a, b = b, a
        
    while n != 1 :
        
        if a+1 == b and a%2 != 0 :
            break
            
        answer += 1
        a = a//2 if a%2 == 0 else (a//2) + 1
        b = b//2 if b%2 == 0 else (b//2) + 1
        n = n//2
      
    return answer
  
# break를 거는 시점이 틀려서 계속 테스트케이스 25, 26번 통과 실패를 반복하고 있었다..
