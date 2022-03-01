def solution(clothes):
    answer = 1
    d = {cloth[1] : 0 for cloth in clothes}
    
    for cloth in clothes :
        d[cloth[1]] += 1
    arr = d.values()
    arr = [value+1 for value in arr]

    if len(arr) == 1 :
        answer = arr[0]
    else :
        for i in range(len(arr)) :
            answer *= arr[i]

        
    return answer-1
  
# 수학 공식을 좀 알아야 풀만 했습니다.. 옷을 안 입는 경우까지 세어주다보니 value의 값들을 1씩 더해주었고 마지막에는 옷을 아예 안입은 경우를 빼줘야 하기에
# -1을 해주었습니다.
