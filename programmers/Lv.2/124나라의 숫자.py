def solution(n):
    answer = ''
    number = n
    while True :
        number = number - 1
        
        if number%3 == 0:
            answer += "1"
        elif number%3 == 1:
            answer += "2"
        else :
            answer += "4"
            
        
        number = number//3
        
        if number == 0:
            break
        
    return answer[::-1]
