import sys
from itertools import permutations

n = int(input())
arr = [i+1 for i in range(n)]
for p in permutations(arr, n) :
    p = list(p)
    p = list(map(str, p))

    s = " ".join(p)
    print(s)
