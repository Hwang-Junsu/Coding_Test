from collections import deque

def convertTime(time) :
    result = 0
    hour, minute = time.split(":")
    result += ((int(hour) * 60) + int(minute))
    return result

def convertMinute(time) :
    result = ""
    
    hour = time // 60; minute = time % 60;
    
    if hour < 10 :
        result += "0"
    result += str(hour)
    result += ":"
    if minute < 10 :
        result += "0"
    result += str(minute)
    return result
    


def solution(n, t, m, timetable):
    answer = ''
    
    timetable.sort()
    timetable = deque(timetable)
    startTime = convertTime("09:00")
    lastBus = False
    crew = 0
    # 버스를 기준으로 반복문을 돌리자
    
    for i in range(n) :
        if i == n-1 : lastBus = True # LastBus Check
        
        count = 0 # Maximum Count
        while True : # Ride on bus
            if convertTime(timetable[0]) > startTime : # Can't Ride..
                break
            crew = convertTime(timetable.popleft())
            count += 1
            if count == m : # Maximum over
                break
            if len(timetable) == 0 : # There is no crew and Not over Maximum
                answer = startTime
                return convertMinute(answer)
        
        if lastBus and count == m :
            answer = crew-1
        elif lastBus and count < m :
            answer = startTime
        startTime += t # NextBus arrive time
    
    
    
    
    return convertMinute(answer)
