board = [[3,0,0,2],[0,0,1,0],[0,1,0,0],[2,0,0,3]]
r = 0; c = 1;

## 기능을 세분화 하자


def printBoard(board):
    for i in range(4):
        for j in range(4):
            print(board[i][j], end=" ")
        print()
    print()


def bComplete(board):
    for i in range(4):
        for j in range(4):
            if board[i][j] > 0:
                return False
    return True


def CantOneMove(board, index, card):
    if card == 0 :
        for i in range(4):
            for j in range(4):
                if board[i][j] > 0:
                    index[0] = i;
                    index[1] = j
                    return
    else :
        for i in range(4) :
            for j in range(4) :
                if board[i][j] == card :
                    index[0] = i; index[1] = j
                    return


def CanOneMove(board, index, card):
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    if card == 0 :
        for i in range(4):

            nx = index[0];
            ny = index[1]

            while True:
                nx += dx[i];
                ny += dy[i]
                if nx not in range(0, 4) or ny not in range(0, 4):
                    break
                if board[nx][ny] > 0:
                    index[0] = nx; index[1] = ny
                    return True
        return False
    else :
        for i in range(4) :

            nx = index[0]; ny = index[1]

            while True :
                nx += dx[i]; ny += dy[i]
                if nx not in range(0,4) or ny not in range(0,4) :
                    break
                if board[nx][ny] == card :
                    index[0] = nx; index[1] = ny
                    return True
        return False

def pressEnter(board, x, y) : # 엔터 누르기.
    if board[x][y] > 0 :
        Card = board[x][y]
        board[x][y] = 0
        return Card
    else :
        return 0


def solution(board, r, c):
    answer = 0
    index = [r, c] # 현재의 인덱스를 표현
    log = []
    nowCard = 0 # 현재 카드

    while True :
        nowCard = pressEnter(board, index[0], index[1]) # 엔터 키는 카드를 지우고 점수를 올리는데 만

        if nowCard != 0 :
            answer += 1
            if len(log) == 0 : log.append(nowCard)
            elif log[-1] == nowCard :
                log.pop(); nowCard = 0
            else :
                log.append(nowCard)
        print(answer)
        if bComplete(board) : break
        # Move 기능은 인덱스를 조종하는데에만 집중.
        if CanOneMove(board, index, nowCard) : # 한번에 갈 수 있는 근처의 카드가 있다면.
            answer += 1
        else : # 한번에 갈 수 있는 근처의 카드가 없음.
            CantOneMove(board, index, nowCard)
            answer += 2

        printBoard(board)




    return answer


solution(board, r, c)
