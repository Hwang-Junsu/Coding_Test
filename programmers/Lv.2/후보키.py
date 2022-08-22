from itertools import permutations

def check(uniq, compare) :
    uniq = list(uniq)
    compare = list(compare)
    for subuniq in uniq :
        temp1 = []
        temp2 = []
        for i in subuniq :
            for j in i :
                temp1.append(j)
        for k in compare :
            for p in k :
                temp2.append(p)
        temp1 = set(temp1); temp2 = set(temp2)
        if temp1.issubset(temp2) : 
            return False
    return True
    

def solution(relation):
    
    answer = 0
    length = len(relation[0])
    people = len(relation)
    index = [0 for _ in range(length)]
    ic = [[]]
    
    for info in relation :
        for idx in range(len(info)) :
            info[idx] = info[idx] + str(idx)
    
    # index 조합을 만듬
    for i in range(1, len(relation[0])+1) :
        index = [0 for _ in range(length)]
        for j in range(len(index)-i, len(index)) :
            index[j] = 1
        ic.append(list(set(permutations(index, length))))
    
    uniq = [] # 후보키 저장용
    for count in range(1, len(ic)) : # 1~n 개의 조합을 검사.

        for combi in ic[count] : # n개를 뽑는 경우의 수를 탐색합니다.
            u = set() # 현재 경우의 수를 저장
            for info in relation :
                string = list()
                for idx in range(len(combi)) : # n개를 뽑는 경우의 수 중 하나를 탐색합니다.
                    if combi[idx] == 1 :
                        string.append(info[idx])
                u.add(tuple(string))
            if len(u) == people : # 중복이 없다는 것. 유일성 검사
                if len(uniq) == 0 :
                    uniq.append(u)
                    answer += 1                    
                elif check(uniq, u) :
                    uniq.append(u)
                    answer += 1
    return answer
  
# 복잡한 문제.. 코드가 좀 지저분 하다.
# issubset() 함수에 사용에 대해 배움. 
