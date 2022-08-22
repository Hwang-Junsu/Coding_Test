# my ps
# 1. 완전탐색
# 2. 어피치가 쏜 화살 갯수보다 많거나 안쏴야함.
# 3. 안쏘는 경우의 수를 모두 넣어..
# 4. 우승할 경우의수가 많은 경우 가장 낮은 거를 많이 맞춘 경우

from itertools import combinations

def score_cal(rion, apeach) :
    rs = 0
    aps = 0
    
    for i in range(10, -1 ,-1) :
        if rion[10-i] == 0 and apeach[10-i] == 0 :
            continue
        if rion[10-i] > apeach[10-i] :
            rs += i
        elif apeach[10-i] != 0 and rion[10-i] <= apeach[10-i] :
            aps += i
    
    return rs-aps
    

def shoot(donts, n, apeach) :
    index = 0
    rion = [0,0,0,0,0,0,0,0,0,0,0]
    while n != 0 :
        if index not in donts and n > apeach[index] :
            rion[index] = apeach[index] + 1
            n -= apeach[index] + 1
        index += 1
        
        if index == 11 :
            if n > 0 :
                rion[10] += n
            return rion
        
    return rion

def index_cal(rion) :
    score = 0
    index_score = [1,2,3,4,5,6,7,8,9,10,11]
    for i in range(len(rion)) :
        score += (rion[i]*index_score[i])
    return score

def solution(n, info):
    answer = []
    score_index = [0,1,2,3,4,5,6,7,8,9,10]
    dontshoot = []
    
    mx = -1000
    index_to_score = 0
    for i in range(0,12) :
        for combi in combinations(score_index, i) :
            dontshoot.append(combi)

    for dont in dontshoot :
        arr = shoot(dont, n, info)
        if mx == score_cal(arr,info) :
            if index_cal(arr) > index_cal(answer) :
                answer = arr
                mx = max(mx, score_cal(arr, info)) 
        elif mx < score_cal(arr, info)  :
            answer = arr
            mx = max(mx, score_cal(arr, info))
            
    if mx < 1 :
        return [-1]

    return answer
