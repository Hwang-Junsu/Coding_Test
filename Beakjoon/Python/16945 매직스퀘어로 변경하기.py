from itertools import permutations

board = []
for i in range(3) : board += list(map(int, input().split()))
number = [i+1 for i in range(9)]

def check(arr) :
    if arr[0] + arr[1] + arr[2] != 15 : return False
    if arr[3] + arr[4] + arr[5] != 15 : return False
    if arr[6] + arr[7] + arr[8] != 15 : return False
    if arr[0] + arr[3] + arr[6] != 15 : return False
    if arr[1] + arr[4] + arr[7] != 15 : return False
    if arr[2] + arr[5] + arr[8] != 15 : return False
    if arr[0] + arr[4] + arr[8] != 15 : return False
    if arr[2] + arr[4] + arr[6] != 15 : return False
    return True

answer = 100000
for c in permutations(number, 9) :
    sum = 0
    if check(c) :
        for i in range(9) :
            sum += abs(c[i] - board[i])
        answer = min(sum, answer)
        
print(answer)
    
