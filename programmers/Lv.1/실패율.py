from collections import deque
def solution(N, stages):
    answer = []
    fail_ratio = []
    stages.sort()
    temp1 = deque(stages)
    stages = deque(stages)
    # 실패율 = 스테이지 도달했으나 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    # N = 스테이지의 개수
    user = len(stages)
    level = 1
    while level != N+1:
        fail = 0
        for i in stages :
            if i == level :
                fail += 1
                temp1.popleft()
        fail_ratio.append((fail/user,level))
        user = user - fail
        if user <= 0 :
            user = 1
        level += 1
    
    
    fail_ratio.sort(reverse = True, key = lambda x : (x[0],-x[1]))
    for i in range(len(fail_ratio)) :
        answer.append(fail_ratio[i][1])
    
    if answer[0] == N+1 :
        answer.pop(0)
    print(answer)
    print(fail_ratio)
    
    return answer
