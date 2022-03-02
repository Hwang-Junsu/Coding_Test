from collections import deque

def solution(progresses, speeds):
    answer = []
    function = deque(progresses)
    speeds = deque(speeds)
    
    while function :
        count = 0
        for idx in range(len(function)) :
            function[idx] = function[idx] + speeds[idx]

        while True :
            if function[0] < 100 :
                break
            if function[0] >= 100 :
                function.popleft()
                speeds.popleft()
                count += 1
            if len(function) == 0 :
                break
        if count > 0 :
            answer.append(count)
        
    
    
    return answer
