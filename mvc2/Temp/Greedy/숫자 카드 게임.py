n,m = map(int, input().split())
card = [list(input().split()) for i in range(n)]

ans = []
for i in range(n) :
    ans.append(min(card[i]))

print(max(ans))


# 1. 내 풀이 - 입력받은 카드를 2차원 배열로 입력받아서, 각 행마다 최소값을 구해서 정답 배열에 넣어줌.
#            - 정답 배열에서의 최대 값을 출력함.

# 2. 개선 사항 - 새로운 배열을 굳이 만들지 않아도, 반복문 안에서 가장 작은 수를 찾아 가장 큰 수와 비교 할 수 있음.

for i in range(n) :
  data = list(map(int, input().split()))
  min_value = min(data)
  result = max(result, min_value)
