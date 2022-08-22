from collections import defaultdict

def solution(lines):
    answer = 0
    start = []
    end = []
    
    for line in lines :
        date, time, processingTime = line.split()
        
        startTime = 0
        hour, minute, second = time.split(":")
        sec, milisecond = second.split(".")
        
        startTime = ((int(hour) * 3600) + (int(minute) * 60) + int(sec)) * 1000 + int(milisecond) - int(float(processingTime[:-1])*1000) + 1
        endTime = ((int(hour) * 3600) + (int(minute) * 60) + int(sec)) * 1000 + int(milisecond)
        
        start.append(startTime)
        end.append(endTime)
    
    for i in range(len(start)) :
        count = 0
        now = end[i]
        
        for j in range(i, len(start)) :
            if now > start[j] - 1000 :
                count += 1
        answer = max(answer, count)

    
    return answer
