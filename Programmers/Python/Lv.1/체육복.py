def solution(n, lost, reserve) :
    answer = 0
    # -1은 이미 빌려준 사람
    # 0은 가지고 있는 사람
    # 1은 빌려줄 수 있는 사람
    # 2는 빌림 받은 사람
    # 3은 빌려받아야 하는 사람.
    student = [0 for i in range(n)]
    
    for i in range(len(lost)) :
        student[lost[i]-1] = 3
    for i in range(len(reserve)) :
        if student[reserve[i]-1] == 3 :
            student[reserve[i]-1] = 0
        else :
            student[reserve[i]-1] = 1
    
    for i in range(len(student)) :
        
        if i == len(student)-1 and student[i] == 1 :
            if student[i-1] == 3 :
                student[i-1] = 2
                student[i] = -1
        elif i == 0 and student[i] == 1 :
            if student[i+1] == 3 :
                student[i+1] = 2
                student[i] = -1
        
        elif student[i] == 1 :
            if student[i-1] == 3 :
                student[i-1] = 2
                student[i] = -1
            elif student[i+1] == 3 :
                student[i+1] = 2
                student[i] = -1
    
    for i in range(len(student)) :
        if student[i] < 3 :
            answer+= 1

    return answer
