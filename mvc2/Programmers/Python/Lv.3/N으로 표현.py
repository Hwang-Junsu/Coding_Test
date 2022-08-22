import math

def solution(N, number):
    answer = -1
    dp = [set()]
        
    for i in range(1, 9) :
        
        list_set = {int(str(N) * i)}
        
        for j in range(i) :
            
            for front in dp[j] :
                for back in dp[i-j] :
                    list_set.add(front + back)
                    list_set.add(front - back)
                    list_set.add(back - front)
                    list_set.add(front * back)
                    if front != 0 : list_set.add(back // front)
                    if back != 0 : list_set.add(front // back)
        
        if number in list_set :
            answer = i
            break
        dp.append(list_set)

        
    return answer
