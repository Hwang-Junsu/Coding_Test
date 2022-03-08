from collections import deque

def solution(priorities, location):
    answer = 0
    docu = []
    index = 0
    num = 0
    for priority in priorities :
        
        docu.append((index, priority))
        index += 1
    printer = deque(docu)
    
    while printer :
        max_pri = max(printer, key = lambda x : x[1])[1]
        
        if printer[0][1] == max_pri :
            num += 1
            if printer[0][0]  == location :
                answer = num
                break
            printer.popleft()
        else :    
            printer.rotate(-1)
    
    
    return answer
