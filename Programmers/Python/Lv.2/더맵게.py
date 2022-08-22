import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    count = 0
    while True :
        
        check = True
        for value in scoville :
            if value >= K :
                check = True
            else :
                check = False
                break
        
        if check :
            break
        if len(scoville) < 2 :
            count = -1
            break
        count += 1
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        answer = first + (second*2)
            
        heapq.heappush(scoville, answer)
    return count
