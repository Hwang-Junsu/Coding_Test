# 나의 접근 방식
# 1. 일단 식을 숫자와 수식을 쪼개야겠지...? (순서를 유지한 채로)
# 2. while문을 만든다. -> 탈출 조건은 list안에 *, - , + 가 없을 때까지.
# 3. *,-,+의 우선순위는 우선순위 hash? list? tuple?을 만들어서 정함.
# 4. while문을 돌리면서 우선순위에 따라 해당하는 수식 왼쪽과 오른쪽을 계산해줌.
# 4-1. 계산을 해준 값은 범위 밖의 안쓰는 값으로 대치하고, 결과값을 원래 operator 자리에 넣어 준다.
# 5. 마지막 값을 절대 값으로. 우선순위의 모든 경우를 해서 최대값을 갱신해줌.
from itertools import permutations
from copy import deepcopy

def solution(expression):
    answer = 0
    cala = []
    p = set()
    separate = ""
    # 문자열 우선 분리
    for i in range(len(expression)) :
        if expression[i].isdigit() : 
            separate += expression[i]
        else :
            cala.append(separate)
            separate = ""
            cala.append(expression[i])
            p.add(expression[i])
        
        if i == len(expression)-1 :
            cala.append(separate)
            
    p = list(p)
    mx = 0
    for operator in permutations(p,len(p)) : # 우선순위의 모든 경우
        index = 0
        cal = deepcopy(cala)
        while index != len(p) :
            for i in range(len(cal)) :
                if cal[i] == operator[index] :
                    if operator[index] == '*' :
                        cal[i] = int(cal[i-1]) * int(cal[i+1])
                        cal[i-1] = 10**15; cal[i+1] = 10**15; break
                    if operator[index] == '+' :
                        cal[i] = int(cal[i-1]) + int(cal[i+1])
                        cal[i-1] = 10**15; cal[i+1] = 10**15; break
                    if operator[index] == '-' :
                        cal[i] = int(cal[i-1]) - int(cal[i+1])
                        cal[i-1] = 10**15; cal[i+1] = 10**15; break
                        
            while 10**15 in cal :
                cal.remove(10**15)
            if operator[index] not in cal :
                index += 1
        mx = max(mx, abs(sum(cal)))
            
            

    answer = mx
    
    return answer
