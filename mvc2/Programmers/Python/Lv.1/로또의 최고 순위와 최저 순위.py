def solution(lottos, win_nums):
    answer = []
    lottos.sort()
    win_nums.sort()
    winning = {6 : 1, 5 : 2, 4 : 3, 3 : 4, 2 : 5, 1 : 6, 0 : 6}
    count = 0
    zero = 0
    for i in range(len(lottos)) :
        for j in range(len(win_nums)) :
            if lottos[i] == win_nums[j] :
                count += 1
        if lottos[i] == 0 :
            zero += 1
            
    answer.append(winning[count+zero])   
    answer.append(winning[count])
    
    return answer
