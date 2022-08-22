def solution(n):
    answer = 0
    three = []
    while n != 0 :
        if n%3 == 1 :
            three.append(1)
        elif n%3 == 2 :
            three.append(2)
        else : 
            three.append(0)
        n = n//3
    
    digit = 0
    while len(three) != 0 :
        answer += three[len(three)-1] * (3 ** digit)
        digit += 1
        three.pop()
    return answer
