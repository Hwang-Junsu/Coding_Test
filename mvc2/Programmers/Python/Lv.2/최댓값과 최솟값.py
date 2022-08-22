def solution(s):
    answer = ""
    num = s.split()
    num = [int(ch) for ch in num]
    num.sort()
    
    answer += str(num[0])
    answer += " "
    answer += str(num[len(num)-1])
    
    return answer
