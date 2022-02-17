def solution(nums):
    answer = 0
    
    length = len(nums)//2
    ponket = list(set(nums))
    
    if len(ponket) > length :
        answer = length
    else :
        answer = len(ponket)
    
    return answer
