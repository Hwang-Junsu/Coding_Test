s = input(); answer = 10 if s[0] == 'd' else 26
for i in range(1, len(s)) :
    if s[i] == 'd' :
        if s[i] ==  s[i-1] : answer *= 9
        else : answer *= 10
    else :
        if s[i] == s[i-1] : answer *= 25
        else : answer *= 26
print(answer)
