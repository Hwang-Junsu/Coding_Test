from collections import deque


def solution(operations):
    answer = []
    
    
    q = deque()
    
    count = 0
    
    for operation in operations :
        
        oper, num = operation.split()
        if oper == 'I' :
            q.append(int(num))
        elif oper == 'D' :
            q = list(q)
            q.sort()
            q = deque(q)
            if num == "1" :
                if len(q) != 0 : q.pop()
            elif num == "-1" :
                if len(q) != 0 : q.popleft()
    
    if len(q) == 0 :
        return [0,0]
    
    answer.append(max(q))
    answer.append(min(q))
    
    return answer
