def solution(numbers):
    
    answer = ''
    numbers = [str(number) for number in numbers]
    
    maxlen = 0
    for i in numbers :
        maxlen = max(maxlen, len(i))
    numbers.sort(reverse = True, key = lambda x : (x*3))
    
    for number in numbers :
        answer += number
    
    if int(answer) == 0 :
        return "0"
    
    return answer
