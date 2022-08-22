def move(answer, N, start, to) :
    answer.append([start, to])

def hanoi(answer, N, start, to, via):
    if N == 1:
        move(answer, 1, start, to)
    else:
        hanoi(answer, N-1, start, via, to)
        move(answer, N, start, to)
        hanoi(answer, N-1, via, to, start)

def solution(n):
    answer = []
    hanoi(answer, n, 1, 3, 2)
    return answer
  
  # 재귀에 관한 문제, 공부를 조금 더 해야할 듯 하다.
