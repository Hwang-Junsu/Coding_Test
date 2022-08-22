a, p = map(int, input().split())
arr = []

def calculator(num) :
    result = 0
    while num != 0 :
        
        n = num%10
        n = int(pow(n, p))
        result += n
        num = num//10
    return result
check = -1
arr.append(a)
value = calculator(arr[-1])
while True :
    if value in arr and check == -1 :
        check = value
        break
    else :
        arr.append(value)
        value = calculator(arr[-1])

index = arr.index(check)
print(len(arr[:index]))
