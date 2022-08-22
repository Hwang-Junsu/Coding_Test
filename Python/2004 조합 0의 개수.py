n, m = map(int, input().split())

# n! ++ /// (n-m)! m! --
num = 2; fc = 0; tc = 0
while num <= n :
    tc += (n // num)
    num *= 2
num = 2
while num <= (n-m) :
    tc -= ((n-m) // num)
    num *= 2
num = 2
while num <= m :
    tc -= (m // num)
    num *= 2
num = 5
while num <= n :
    fc += (n // num)
    num *= 5
num = 5
while num <= (n-m) :
    fc -= ((n-m) // num)
    num *= 5
num = 5
while num <= m :
    fc -= (m // num)
    num *= 5
answer = min(fc, tc)
print(answer)
