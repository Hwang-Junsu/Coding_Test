def solution(x):
    temp = 0
    temp2 = x
    while x != 0 :
        temp += x%10
        x = x//10
    x = temp2
    
    print(temp)
    if x % temp == 0 :
        answer = True
    else :
        answer = False
    return answer
  
  
  
# 1. 내 풀이 - x값을 저장해 둔 다음 x값을 10으로 나누어 가면서 각 자리수의 합을 구한다
#            - 각 자리수의 합을 나누어 떨어진다면 True를 반환하고, 아니면 False를 반환한다

# *** 프로그래머스 def 만들기 형식 
