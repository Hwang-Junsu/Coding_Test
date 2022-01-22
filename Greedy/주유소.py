n = int(input())
dis = list(map(int,input().split()))
gas = list(map(int,input().split()))
ans = 0
dis.append(0)
start_gas = gas[0]
index = 0

for i in range(1,n-1) :
    if gas[i] > gas[i-1] :
        gas[i] = gas[i-1]

for i in range(n) :
    ans += dis[i]*gas[i]
        
print(ans)


# 1. 내 풀이 - 1번 주유소에서는 무조건 기름을 넣어야 되므로 반복문에서 제함
#            - 다음 주유소가 이전 주유소보다 클 경우 기름을 넣는 것이 손해이니 이전 주유소에서 더 넣어야됨
#            - 주유소의 값을 더 싼 주유소 값으로 갱신해줌으로써 계산은 동일하게 이루어지게 만듬

# 2. 개선 사항 - 쉽게 생각하면 해결되는 문제임에도 불구하고 30분정도 소요되었음.
#              - 너무 복잡하게 생각하는 습관을 버리고 지속적인 문제풀이 훈련을 통해 개선해야겠음
