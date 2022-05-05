from itertools import permutations

def checkID(id1, id2) :
    count = 0
    for i in range(len(id1)) :
        if id1[i] == id2[i] or id2[i] == "*" :
            count += 1
    if count == len(id1) : return True
    return False

def solution(user_id, banned_id):
    answer = 0
    banlist = []
    
    for permu in permutations(user_id, len(banned_id)) :
        permu = list(permu)
        for i in range(len(banned_id)) :
            if len(permu[i]) != len(banned_id[i]) :
                break
            if not checkID(permu[i], banned_id[i]) :
                break
        else :
            banlist.append(permu)
            
    for lst in banlist :
        lst.sort()
    banlist = list(set([tuple(set(l)) for l in banlist]))
    answer = len(banlist)
    return answer
