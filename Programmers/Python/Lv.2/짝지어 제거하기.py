def solution(s):
    answer = -1
    stack = []
    s_list = list(s)
    

    for char in s_list :
        
        if len(stack) == 0 :
            stack.append(char)
        
        else :
            if stack[-1] == char :
                stack.pop()
            else :
                stack.append(char)
    
    if len(stack) == 0 :
        answer = 1
    else :
        answer = 0
    return answer
