n = int(input())
btn = [300, 60, 10]
btn_count = [0, 0, 0]

for i in range(3) :
    if n >= btn[i] :
        btn_count[i] += n//btn[i]
        n = n%btn[i]

if n != 0 :
    print(-1)
else :
    print(f'{btn_count[0]} {btn_count[1]} {btn_count[2]}')
    
    
# 1. 내 풀이 - '분'을 '초'로 환산 후에 버튼 list를 만들었음.
#            - 가장 큰 수부터 나누어 빼주면서 마지막에 n 값이 0이 되지 않으면 -1을 반환하고, 0이면 버튼 누른 수를 반환함.
