def solution(n):
    answer = []
    number = 1
    triangle = [[0] * i for i in range(1, n+1)]
    
    dy = [0, 1, -1] # state = 0 내려가기 1 오른쪽으로 가기 2 올라가기
    dx = [1, 0, -1]
    x = -1
    y = 0
    move = n
    
    for direction in range(n) :
        for i in range(move) :
            x = dx[direction%3] + x
            y = dy[direction%3] + y
            triangle[x][y] = number
            number += 1
        move -= 1
    
    for value in triangle :
        answer += value
        
    return answer
