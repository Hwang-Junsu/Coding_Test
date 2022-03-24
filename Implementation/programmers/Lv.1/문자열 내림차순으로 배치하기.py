def solution(s):
    answer = ''
    string = sorted(s, reverse = True)
    for char in string :
        answer += char
    
    return answer
