import sys

num = int(sys.stdin.readline())
arr = []
for _ in range(num) :
    order = sys.stdin.readline().split()

    if order[0] == "add" :
        x = int(order[1])
        if x not in arr : arr.append(x)
    elif order[0] == "remove" :
        x = int(order[1])
        if x in arr : arr.remove(x)
    elif order[0] == "check" :
        x = int(order[1])
        if x in arr : print(1)
        else : print(0)
    elif order[0] == "toggle" :
        x = int(order[1])
        if x in arr : arr.remove(x)
        else : arr.append(x)
    elif order[0] == "all" : arr = [i+1 for i in range(20)]
    elif order[0] == "empty" : arr = []
