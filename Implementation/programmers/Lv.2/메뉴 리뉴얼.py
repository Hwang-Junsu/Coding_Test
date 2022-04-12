from itertools import combinations

def solution(orders, course):
    answer = []
    od = []
    d = {}
    for order in orders :
        string = sorted(list(order))
        od.append("".join(string))
    # 각 문자열 정렬먼저
    
    for order in od:
        for i in course :
            for combi in combinations(order, i) :
                name = "".join(combi)
                d["".join(name)] = d.get(name, 0) + 1
    for i in course :
        food = [(k,v) for k,v in d.items() if len(k) == i]
        mv = max(food, key = lambda x:x[1])[1] if len(food) != 0 else 0
        for k,v in food :
            if v == mv and v > 1 :
                answer.append(k)
            
    answer.sort()     
            
        
        
    return answer


# combination과 hash를 이용한 완전탐색 문제.
