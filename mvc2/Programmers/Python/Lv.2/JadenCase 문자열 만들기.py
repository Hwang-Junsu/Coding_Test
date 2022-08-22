def solution(s):
    answer = ''
    s = s.lower()
    index = 0
    for char in s :
        if index == 0 :
            try :
                char = char.upper()
            except :
                pass
        if char == " " :
            index = 0
        else :
            index += 1
        answer += char
    
    return answer
