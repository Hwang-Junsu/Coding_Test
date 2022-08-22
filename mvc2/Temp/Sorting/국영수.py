import sys

n = int(sys.stdin.readline())
student = list()
for i in range(n) :
    
    name, kr, en, ma = sys.stdin.readline().split()
    student.append((name, int(kr), int(en), int(ma)))
    
student.sort(key = lambda x : (-x[1], x[2], -x[3], x[0]))

for i in range(n) :
    print(student[i][0])

    
# 1. 내 풀이 - 람다함수를 이용하여 key의 조건을 문제 조건에 맞게 설정해 주었음
#            - 이전에 c++로 클래스를 이용하여 해결 하였는데 파이썬이 훨씬 간단한 것 같다.
