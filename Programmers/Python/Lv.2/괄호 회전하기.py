from collections import deque

def check(s) :
    stack = []
    for i in range(len(s)) :
        
        if len(stack) == 0 :
            stack.append(s[i])
        elif s[i] == ']' and stack[-1] == "[" :
            stack.pop()
        elif s[i] == '}' and stack[-1] == "{" :
            stack.pop()
        elif s[i] == ')' and stack[-1] == "(" :
            stack.pop()
        else :
            stack.append(s[i])
    
    if len(stack) == 0 :
        return True
    return False
    
def solution(s):
    answer = 0
    box = deque(s)
    
    for i in range(len(box)) :
        if check(box) == True :
            answer += 1
        box.rotate(-1)

        
        
    return answer
