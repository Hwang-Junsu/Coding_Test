def solution(name):
    answer = 0
    answer_list = []

    dic = {}
    length = len(name)
    for i in range(26) :
        dic[chr(65+i)] = i
    setting = [dic[c] for c in name]
    con_name = [0 for i in range(length)]
    
    if con_name == setting :
        return 0
    check = [False for i in range(length)]
    for i in range(length) :
        if setting[i] > 0 :
            check[i] = True
    
    
    for i in range(2) :
        cursor = 0
        answer = 0
        con_name = [0 for i in range(length)]
        check = [False for i in range(length)]
        for j in range(length) :
            if setting[j] > 0 :
                check[j] = True

        while True :
            if setting[cursor] > 26//2 :
                answer += 26-setting[cursor]
                con_name[cursor] = setting[cursor]
                check[cursor] = False
            else :
                answer += setting[cursor]
                con_name[cursor] = setting[cursor]
                check[cursor] = False

            if True not in check :
                break


            # 커서의 이동 알고리즘
            front = cursor #커서의 위치
            back = cursor
            front_move = 0 #커서 이동의 횟수
            back_move = 0
            while True :
                front += 1
                if front > length-1 :
                    front = 0
                front_move += 1
                if setting[front] != 0 and check[front]:
                    break

            while True :
                back -= 1
                if back < 0 :
                    back = length-1
                back_move += 1
                if setting[back] != 0 and check[back] :
                    break
            
            if i == 0 :
                cursor = front if front_move < back_move else back
                answer += front_move if front_move < back_move else back_move
            
            if i == 1 :
                cursor = front if front_move <= back_move else back
                answer += front_move if front_move <= back_move else back_move
        answer_list.append(answer)
    
    return min(answer_list)
    
   
   # 현재의 상황에서 최적의 해를 구해가는 Greedy 문제이나, 그 해가 최적이라는 보장을 해줄 수 있을까?
