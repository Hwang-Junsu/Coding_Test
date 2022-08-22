from collections import deque


def solution(skill, skill_trees):
    answer = 0
    
    for skill_tree in skill_trees :
        
        d_skill = deque(skill)
        skill_list = list(skill_tree)
        
        ls = d_skill.popleft()
        check = True
        for skil in skill_list :
            
            if ls == skil :
                if len(d_skill) == 0 :
                    break
                ls = d_skill.popleft()
                
                if len(d_skill) == 0 :
                    break
                    
            elif skil in d_skill :
                check = False
                break
                
            else :
                pass
        
        if check == True :
            answer += 1
    
    return answer
