board = [[0]*8 for i in range(8)]
n = input()
index = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8}
move_x = [-2, -2, -1, 1, 2, 2, -1, 1] # UR, UL, RU, RD, DR, DL, LU, LD
move_y = [1, -1, 2, 2, 1, -1, -2, -2] # UR, UL, RU, RD, DR, DL, LU, LD

cnt = 0
x = index[n[0]]-1
y = int(n[1])-1

for k in range(8) :
    if  x + move_x[k] < 0 or y + move_y[k] < 0 or x + move_x[k] > 8 or y + move_y[k] > 8 :
        continue
    else : cnt += 1
           
print(cnt)

# 1. 내 풀이 - 움직일 수 있는 경우를 move에 저장해두고, index값을 알파벳에 따라 숫자로 dictionary에 저장해 줌
#            - 8방향을 검사하기 위해 반복문을 설정해주고, 범위 밖으로 나가면 continue를 타고, 아니면 경우의 수를 카운트 하나 해준다

# 2. 개선 사항 - move변수는 불변적이기에 튜플로 저장하는 것이 더 안전한 방법일 것 같음
#              - 범위 밖을 메인 조건문으로 활용하는 것 보단 범위 안으로 하는 것이 코드의 간결함이 더해질 것 같음.


