n,k = map(int, input().split())
coin = [int(input()) for _ in range(n)]
coin.sort(reverse=True)
cnt = 0
while k != 0 :
    for i in range(n) :
        if k >= coin[i] :
            cnt += k//coin[i]
            k = k%coin[i]
            break

print(cnt)

# 1. 내 풀이 - 동전을 입력받고 인덱싱이 편하게 내림차순으로 정렬함
             - 동전 단위수보다 k값이 크다면 k값으로 나눈 몫을 count에 더해주고, k값을 coin에 나눠준 만큼 빼줌
             - k값이 0이 되면 반복문을 탈출
             
# 2. 개선사항 - 처음에는 해당 coin값에 걸리면 일일이 다 빼주는 작업을 해주어 시간초과가 남
              - 한번에 나누는 logic을 생각하여 해결함.
