def solution(seoul):
    answer = ''
    for i in range(len(seoul)) :
        if seoul[i] == "Kim" :
            answer += "김서방은 "
            answer += str(i)
            answer += "에 있다"
    
    return answer
