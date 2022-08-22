def solution(s, n):
    answer = ''
    new_s = list(s)
    for i in range(len(new_s)) :
        if new_s[i] != ' ' :
            new_s[i] = ord(new_s[i])+n
        else :
            new_s[i] = ord(new_s[i])
            
        if new_s[i] >= 123:
            new_s[i] -= 26            
        elif new_s[i] >= 91 and 65 <=new_s[i]-n <= 90 :
            new_s[i] -= 26
            
        answer += chr(new_s[i])
    
    return answer
