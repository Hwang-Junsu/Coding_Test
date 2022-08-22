n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

a.sort()
b.sort(reverse=True)

a = [a[i]*b[i] for i in range(n)]

print(sum(a))


# 1. 내 풀이 - 최소값으로 만들기 위해서는 한 배열은 내림차순, 한 배열은 오름차순으로 정렬하는 것이 베스트라고 생각함.

# 2. 개선사항 - 없음.
