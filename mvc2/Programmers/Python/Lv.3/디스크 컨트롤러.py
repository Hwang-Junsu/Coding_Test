import heapq
import math

# 소요시간이 짧은 순서부터 처리한다
# 대기시간 + 소요시간 계산을 잘 해야한다

def solution(jobs):
    answer = 0
    renewal = []
    workingTime = []
    # 소요시간이 짧은 순으로 뒤집기 전에 가장 먼저 작업을 하는 job을 빼서 처리 한다.
    jobs.sort()
    start, time = jobs[0][0], jobs[0][1]
    jobs.pop(0)
    
    # 첫 번째 작업을 마친 소요 시간과 현재 시간을 기록한다.
    workingTime.append(time)
    now = time + start
    
    # 소요시간이 짧은 순으로 힙에서 pop을 할 수 있게 뒤집어 준다.
    for job in jobs :
        renewal.append((job[1], job[0]))
    heapq.heapify(renewal)
    check = False
    save = []
    # 뒤집어서 만들어 준 새로운 배열을 하나씩 꺼내어 시간 계산 작업을 한다.
    while renewal :
        if not check : time, start = heapq.heappop(renewal)
        
        if now < start and not check : #다음 소요시간이 낮은 작업이 현재 시간보다 시작시간이 크다면 잠시 저장.
            save.append((time,start))
            if len(renewal) == 0 :
                check = True
                
                save.sort(key = lambda x : x[1])
                
                time, start = save.pop(0)
                for t, s in save :
                    heapq.heappush(renewal, (t,s))
                save.clear()
            continue
        
        if check :
            workingTime.append(time)
            now = time + start
            check = False
        else :
            workingTime.append((now - start) + time)
            now = now + time
        
        if len(save) > 0 :
            for t, s in save :
                heapq.heappush(renewal, (t,s))
            save.clear()
    
    answer = math.floor(sum(workingTime) / len(workingTime))
    return answer
