num = input(); sum = 0; answer = 0
num = sorted(num, reverse = True); num = "".join(num)
if num[-1] != '0' : answer = -1
else :
    for i in num :
        sum += int(i)
    answer = -1 if sum%3 != 0 else num
print(answer)
    
