def solution(n):
    answer = 0
    arr = [i+1 for i in range(n)]
    
    front = 0
    back = 1
    
    while front < back :
        num = 0
        for i in range(front, back) :
            num += arr[i]
        
        if num == n :
            answer += 1
            front += 1
        elif num > n :
            front += 1
        elif num < n :
            back += 1
        
        
    return answer
    
