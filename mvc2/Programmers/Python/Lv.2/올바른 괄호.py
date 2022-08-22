def solution(s):
    
    stack = []
    
    for ch in s :
        if len(stack) != 0 and stack[-1] == "(" and ch == ")" :
            stack.pop()
        else :
            stack.append(ch)
    
    if len(stack) != 0 :
        return False
    else :
        return True
