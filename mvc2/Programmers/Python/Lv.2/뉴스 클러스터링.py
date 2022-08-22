import math
def solution(str1, str2):
    answer = 0
    
    a = [(str1[i] + str1[i+1]).upper() for i in range(len(str1) - 1) if (str1[i] + str1[i+1]).isalpha()]
    b = [(str2[i] + str2[i+1]).upper() for i in range(len(str2) - 1) if (str2[i] + str2[i+1]).isalpha()]
    da = {}; db = {}
    for x in a :
        da[x] = da.get(x, 0) + 1;
    for x in b :
        db[x] = db.get(x, 0) + 1;
    anb = 0
    for k, v in da.items() :
        if k in db.keys() and k in da.keys() :
            anb += min(da[k],db[k])
    alb = len(a+b) - anb

    if len(a) == 0 and len(b) == 0 :
        return 65536
    else :
        return math.floor((anb / alb) * 65536)
