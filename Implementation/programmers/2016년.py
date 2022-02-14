def solution(a, b):
    answer = ''
    weekend = ["FRI", "SAT", "SUN", "MON","TUE", "WED", "THU"]
    day = 0
    for i in range(1, a) :
        if i == 1 or i == 3 or i == 5 or i == 7 or i == 8 or i == 10 or i == 12 :
            day += 31
        elif i == 2 :
            day += 29
        else :
            day += 30
    day += b
    
    
    print(day)
    answer += weekend[(day%7)-1]
    
    
    return answer
