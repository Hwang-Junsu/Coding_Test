# 나의 접근 방법
# 1. 입력하는 숫자가 너무크다. 규칙이 있을것.
# 2. 4로나눈 값의 나머지가 3인 값들만 처리하면 될 것 같음. else f(x) = x+1
from collections import deque

def solution(numbers):
    answer = []
    
    for number in numbers :
        number = int(number)
        string = "0b"
        if number%4 != 3 :
            answer.append(number+1)
        else :
            save = 0
            number = deque(bin(number)[2:])
            for i in range(len(number)-1, -1, -1) :
                if number[i] == '1' and number[i-1] == '0' :
                    number[i], number[i-1] = number[i-1], number[i]
                    break
            else :
                number.appendleft('0')
                number[0], number[1] = number[1], number[0]
        
            for i in range(len(number)):
                string += number[i]
            answer.append(int(string, 2))
                
    return answer
  
  
  #7,8,9 테스트 케이스 런타임에러가 발생해서 int형으로 캐스팅 해주고 logic을 진행 함. number가 int형이 아니였던 것 같음. 질문 보고 해결함.
