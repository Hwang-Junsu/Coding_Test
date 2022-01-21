n,k = map(int, input().split())
cnt = 0

while n != 1 :
    if n%k == 0 :
        n //= k
    else :
        n -= 1
    cnt += 1
    
print(cnt)

# 1. 내 풀이 - 1이 될 때까지 반복문을 진행한다.
#            - n이 k로 나누었을 때 나누어 떨어진다면 k로 나눈다. 이 외에는 1을 빼는 방식
#            - 연산이 진행될 때마다 cnt변수를 하나씩 올린다

# 2. 개선 사항 - n이 100억 이상의 큰 수가 되는 경우를 가정했을 때에 빠르게 동작하려면, n이 k의 배수가 되도록 효율적으로 한 번에
#                 빼는 방식도 생각해 봐야함.
                 


while True :
  #(N==K 로 나누어 떨어지는 수) 가 될 때까지 1씩 빼기
  target = (n//k)*k
  result += (n-target)
  n = target
  #n이 k보다 작을 때 반복문 탈출
  if n < k : break
  
  #k로 나누기
  result += 1
  n//= k
#마지막으로 남은 수에 대하여 1씩 빼기
result += (n-1)
