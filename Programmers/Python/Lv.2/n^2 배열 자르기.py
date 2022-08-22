# 나의 접근 방법
# 1. 숫자의 범위가 너무 큽니다. 배열을 전부 다 만들어서 할려면 메모리 초과 or 시간초과가 100%

def solution(n, left, right):
    answer = []
    
    start = [int(left)//n, int(left)%n]
    for i in range(int(right) - int(left) + 1) :
        answer.append(max(start) +1)
        start[1] += 1
        if start[1] == n :
            start[1] = 0
            start[0] += 1
    return answer
  
# TC 12,13 번 런타임 에러가 났음.. 왜인지 모르겠지만 int형으로 감싸면 해결이 됨. TC에 문자열로 되어있는 숫자가 있는가봄..
