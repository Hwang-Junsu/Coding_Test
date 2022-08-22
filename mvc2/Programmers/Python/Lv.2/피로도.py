import itertools

def solution(k, dungeons):
    answer = 0
    save = k
    length = len(dungeons)
    dc = itertools.permutations(dungeons, length)
    dcl = list(dc)
    
    for i in range(len(dcl)) :
        temp = 0
        k = save
        for dungeon in dcl[i] :
            if k >= dungeon[0] :
                k = k - dungeon[1]
                temp += 1
            else : pass
            if k < 0 : break
        
        answer = max(answer, temp)

    return answer
