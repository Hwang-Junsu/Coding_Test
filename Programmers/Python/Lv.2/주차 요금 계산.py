import math

def solution(fees, records):
    answer = {} # Cumalate
    parking = {} # [Inner Time, state]
    prices = []
    
    for car in records :
        info = car.split()
        answer[info[1]] = 0
    
    for car in records :
        info = car.split() # info[0] = 시:분 # info[1] = 차 번호 # info[2] = 입출차여부
        
        # 1. 시/분을 분으로 치환하기
        time = info[0].split(":")
        inTime = (int(time[0]) * 60 ) + int(time[1])
        
        if info[2] == "IN" :
            parking[info[1]] = [inTime,"IN"] # 들어간 시간과 상태를 저장.
        elif info[2] == "OUT" :
            answer[info[1]] += inTime - parking[info[1]][0]
            parking[info[1]] = [0 , "OUT"] # 왔던 시간을 초기화 하고, 나간 상태로 만듬.
    
    for key in parking :
        if parking[key][1] == "IN" :
            answer[key] += (1439 - parking[key][0])
            parking[key][1] = "OUT"
            parking[key][0] = 0
    
    # 시간에 따른 요금 부과하기
    
    for key in answer :
        price = 0
        
        if answer[key] > fees[0] :
            price = (math.ceil((answer[key] - fees[0]) / fees[2]) * fees[3]) + fees[1]
        else :
            price = fees[1]
        prices.append((key, price))
        
    prices.sort()
    result = [int(prices[i][1]) for i in range(len(prices))]
    return result
    
