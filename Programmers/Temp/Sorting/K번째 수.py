def solution(array, commands):
    answer = []
    
    for i in range(len(commands)) :
        temp = array[commands[i][0]-1 : commands[i][1]]
        temp.sort()
        answer.append(temp[commands[i][2]-1])
    
    
    return answer
  
# 1. 내 풀이 - 슬라이스의 개념을 알고 풀이를 해야하는 문제.
