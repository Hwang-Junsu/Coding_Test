def convert(number, n) :
    if number == 0 :
        return "0"
    
    overTen = {10 : "A", 11 : "B", 12 : "C", 13 : "D", 14 : "E", 15 : "F"}
    
    temp = number
    result = ""
    while temp != 0 :
        
        if n > 10 :
            if temp%n >= 10 :
                result += overTen[temp%n]
            else :
                result += str(temp % n)
        else :
            result += str(temp % n)
        temp = temp // n
    
    return result[::-1]
    

def solution(n, t, m, p):
    answer = ''
    start = 0
    string = ""
    index = 0
    length = ((t-1) * m) + p  # 필요한 string의 길이
    
    while True :
        if len(string) >= length :
            break
        
        string += convert(start, n)
        start += 1
    
    while True :
        if len(answer) == t :
            break
        
        if index % m == p-1 :
            answer += string[index]
        
        index += 1
        
    
    return answer
