import sys

sys.stdin = open("input.txt", "r")


n = int(input())

def hanoi(num, fr, to, other):
    # num : 원반의 수
    # from : 원반들이 위치한 곳의 번호
    # to : 원반들을 옮길 목적지 번호
    # other : 나머지 한곳 (경유지)의 번호

    if num == 0 :return

    # 가장 아래 원반을 제외한 원반들을 재귀적으로 목적지가 아닌 곳으로 옮김
    hanoi(num-1, fr, other, to)
    # 가장 아래 원반을 목적지로 옮김
    print(fr, end= " ")
    print(to)
    # 목적지가 아닌 곳으로 옮겼던 원반들을 재귀적으로 목적지로 옮김
    hanoi(num-1, other, to, fr)

print(2 ** n-1)
hanoi(n, 1, 3, 2)
