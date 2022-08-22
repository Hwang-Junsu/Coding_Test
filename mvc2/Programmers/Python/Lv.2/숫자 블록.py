def solution(begin, end):
    answer = [0 for _ in range(end-begin+1)]
    for i in range(end-begin+1) :
        
        number = begin + i
        if number == 1 :
            answer[i] = 0
            continue
            
        for j in range(2, int(number**0.5)+1) :
            mok = number // j
            
            if mok > 10**7 :
                continue
            if number%j == 0 :
                answer[i] = mok
                break
        else :
            answer[i] = 1
            
            
    
    return answer
