from collections import deque

def solution(people, limit):
    answer = 0
    people.sort() # [50,50,70,80]
    people = deque(people)
    
    while True :
        if len(people) == 1 :
            answer += 1
            break
        
        if people[0] + people[-1] <= limit :
            people.pop()
            people.popleft()
            answer += 1
        else :
            people.pop()
            answer += 1
        
        if len(people) == 0 :
            break

        
    return answer
