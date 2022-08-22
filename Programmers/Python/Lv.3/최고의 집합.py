def solution(n, s):
    answer = []
    count = n
    s1 = s
    good_set = []
    if n > s :
        return [-1]
    
    while count > 0 :
        temp = s//n
        good_set.append(temp)
        count -= 1
    sum_set = sum(good_set)
    if sum_set < s :
        per = s - sum_set
        for i in range(per) :
            good_set[i] += 1
        
        
    good_set.sort()
    
    
    return good_set
