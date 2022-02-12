def solution(d, budget):
    answer = 0
    d.sort()
    
    for i in d :
        if budget >= i :
            answer += 1
            budget = budget - i
        else :
            break

    return answer
