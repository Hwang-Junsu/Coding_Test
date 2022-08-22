def solution(sticker):
    
    if len(sticker) == 1 :
        return sticker[0]
    if len(sticker) == 2 :
        return max(sticker[1], sticker[0])
    
    answer = 0
    sticker1 = sticker[:-1]
    sticker2 = sticker[1:]

    dp1 = [0 for _ in range(len(sticker1))] # 0 ~ len(sticker)-2
    dp2 = [0 for _ in range(len(sticker2))] # 1 ~ len(sticker)-1
    
    dp1[0] = sticker1[0]
    dp1[1] = max(sticker1[0], sticker1[1])
    dp2[0] = sticker2[0]
    dp2[1] = max(sticker2[0], sticker2[1])
    for i in range(2, len(sticker1)) :
        dp1[i] = max(dp1[i-2] + sticker1[i], dp1[i-1])
        dp2[i] = max(dp2[i-2] + sticker2[i], dp2[i-1])
    
    answer = max(dp1[-1], dp2[-1])
    

    return answer
  
  
  # DP로 접근해야하는 문제, 첫번째부터 떼는 경우와 두번째부터 떼는 경우를 나누어서 생각해 주어야 함.
