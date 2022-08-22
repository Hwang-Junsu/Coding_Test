def solution(msg):
    answer = []
    d = dict()
    for i in range(26) :
        d[chr(i+ 65)] = i+1
    
    start = 0
    index = len(msg)-1
    while True :

        if msg[start : index+1] not in d.keys() :
            index -= 1
        else :
            answer.append(d[msg[start:index+1]])
            if msg[start:index+2] not in d.keys() :
                d[msg[start:index+2]] = len(d.items()) + 1

            start += len(msg[start:index+1])
            index = len(msg)-1
        
        if start > index : break
    
                
            
        
    
    return answer
