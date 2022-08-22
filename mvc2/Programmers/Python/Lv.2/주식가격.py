def solution(prices):
    answer = []
    
    
    for i in range(len(prices)) :
        length = 0
        for j in range(i+1, len(prices)) :
            
            if prices[i] <= prices[j] :
                length += 1
            else :
                length+=1
                break
        
        answer.append(length)
    
    
    return answer
