from collections import deque

def solution(dartResult):
    dartResult += '0'
    answer = 0
    score = deque()
    idx = -1

    for i in range(len(dartResult)-1) :
        if 50 <= ord(dartResult[i]) <= 57 :
            score.append(int(dartResult[i]))
            idx += 1
        elif ord(dartResult[i]) == 48 :
            if dartResult[i-1] != '1' :
                score.append(int(dartResult[i]))
                idx += 1
        elif ord(dartResult[i]) == 49 :
            if ord(dartResult[i+1]) == 48 :
                score.append(10)
                idx += 1
            else : 
                score.append(1)
                idx += 1
        
        
        if dartResult[i] == 'S' :
            if dartResult[i+1] == '*' :
                score[idx] = score[idx]*2
                if idx != 0 :
                    score[idx-1] = score[idx-1]*2
            elif dartResult[i+1] == '#' :
                score[idx] = -1 * score[idx]
            else :
                score[idx] = score[idx]
            
        if dartResult[i] == 'D' :
            sc = score[idx]*score[idx]
            if dartResult[i+1] == '*' :
                score[idx] = sc*2
                if idx != 0 :
                    score[idx-1] = score[idx-1]*2
            elif dartResult[i+1] == '#' :
                score[idx] = -1 * sc
            else :
                score[idx] = sc

        if dartResult[i] == 'T' :
            sc = score[idx]*score[idx]*score[idx]
            if dartResult[i+1] == '*' :
                score[idx] = sc*2
                if idx != 0 :
                    score[idx-1] = score[idx-1]*2
            elif dartResult[i+1] == '#' :
                score[idx] = -1 * sc
            else :
                score[idx] = sc
        
    answer = sum(score)
    return answer
