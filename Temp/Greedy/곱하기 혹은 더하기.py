s = input()
s = [int(s[i]) for i in range(len(s))]

ans = 0
for i in range(len(s)) :
    
    if s[i] <= 1 or ans <= 1 :
       ans += s[i]
    else :
        ans *= s[i]

print(ans)
