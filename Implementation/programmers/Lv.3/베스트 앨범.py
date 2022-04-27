# 1. 장르별 곡을 해쉬 리스트에 정리 함?

from collections import defaultdict

def solution(genres, plays):
    answer = []
    
    d = defaultdict(list)
    most = dict()
    
    for i in range(len(genres)) :
        d[genres[i]].append((plays[i],i))
    for k in d.keys() :
        d[k].sort(key = lambda x : (x[0], -x[1]))
    
    # 가장 많이 플레이 된 장르는 무엇인가 ???
    mostPlay = []
    for k in d.keys() :
        
        totalPlay = 0
        count = 0
        for play, index in d[k] :
            totalPlay += play
            count += 1
        
        mostPlay.append([totalPlay,count,k])

    mostPlay.sort(reverse = True)
    
    for total, c, key in mostPlay :
        
        count = 0
        while True :
            if count == 2 or len(d[key]) == 0 :
                break
            play, index = d[key].pop()
            answer.append(index)
            count += 1
            
    
    return answer
