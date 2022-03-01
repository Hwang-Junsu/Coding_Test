def solution(citations):
    answer = 0
    count = [i+1 for i in range(len(citations))]
    citations.sort(reverse = True)
    
    
    if min(citations) >= len(citations) :
        answer = len(citations)
    else :
        for i in range(len(citations)) :

            if citations[i] < count[i] :
                answer = i
                break
    
    return answer
