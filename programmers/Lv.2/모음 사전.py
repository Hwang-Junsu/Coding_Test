def solution(word):
    answer = 0
    
    d = {"A" : 1, "E" : 2, "I" : 3, "O" : 4, "U" : 5}
    # A, AA ,AAA, AAAA, AAAAA, AAAAE, AAAAI, AAAAO, AAAAU, AAAE, AAAEA
    order = [[],
            [1,1,1,1,1],
            [782,157,32,7,2],
            [1563,313,63,13,3],
            [2344,469,94,19,4],
            [3125,625,125,25,5]]
    index = 0
    for w in word :
        answer += order[d[w]][index]
        index+=1
    
    return answer
  
  
  # 규칙찾기 문제엿음..
