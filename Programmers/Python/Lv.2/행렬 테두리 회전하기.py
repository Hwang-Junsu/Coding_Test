def rotate_matrix(board, query) :
    x1 = query[0]-1; y1 = query[1]-1; x2 = query[2]-1; y2 = query[3]-1
    value = 10001
    temp = board[x1][y1]
    value = min(temp, value)
    for i in range(x1, x2) :
        board[i][y1] = board[i+1][y1]
        value = min(board[i][y1], value)
    for i in range(y1, y2) :
        board[x2][i] = board[x2][i+1]
        value = min(board[x2][i], value)
    for i in range(x2, x1, -1) :
        board[i][y2] = board[i-1][y2]
        value = min(board[i][y2], value)
    for i in range(y2, y1, -1) :
        board[x1][i] = board[x1][i-1]
        value = min(board[x1][i], value)
    board[x1][y1+1] = temp
    
    return value

def solution(rows, columns, queries):
    answer = []
    
    board = [[0 for i in range(columns)] for j in range(rows)]
    num = 0
    for i in range(rows) :
        for j in range(columns) :
            num +=1 
            board[i][j] = num
    
    for query in queries :
        answer.append(rotate_matrix(board, query))
    
    
    return answer
