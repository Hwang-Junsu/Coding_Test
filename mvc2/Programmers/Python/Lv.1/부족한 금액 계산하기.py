def solution(price, money, count):
    answer = 0
    for i in range(count) :
        answer += (i+1)*price
    
    answer = answer-money
    
    if answer < 0 : return 0

    return answer
