def solution(seoul):
    answer = ''
    for i in range(len(seoul)) :
        if seoul[i] == "Kim" :
            answer += "김서방은 "
            answer += str(i)
            answer += "에 있다"
    
    return answer



#solution

def findKim(seoul):
    return "김서방은 {}에 있다".format(seoul.index('Kim'))
