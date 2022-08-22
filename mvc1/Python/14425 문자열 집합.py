from sys import stdin
n,m = map(int, input().split())

d = dict()

for i in range(n) :
    string = input()
    d[string] = 1
    
answer = 0
for i in range(m) :
    string = input()
    
    if string in d.keys() and d[string] > 0 :
        answer += 1
