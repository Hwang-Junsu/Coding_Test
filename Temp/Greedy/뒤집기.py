s = input()
s = [int(s[i]) for i in range(len(s))]
cnt = 0

for i in range(1, len(s)) :
    if s[i] != s[i-1] :
        cnt += 1


print(cnt//2 if cnt%2 == 0 else (cnt+1)//2)


# 1. 내 풀이 - 다른 문자를 만났을때 cnt변수를 1 씩 증가시킴
#            - 카운트수가 짝수이면 2를 나누어 출력하고 홀수이면 1을더해 2로 나누어 주었음

# 2. 개선사항 - 문제해결을 하긴 했으나 충분한 근거를 가지고 푼것은 아님.
#             - 그리디 알고리즘을 사용하기 위한 정당성을 더 고민해보아야 될 것 같음.
