e,s,m = map(int, input().split()); 
answer = 0; se = 0; ss = 0; sm = 0
while True :
    answer += 1; se += 1; ss += 1; sm += 1
    if se > 15 : se = 1
    if ss > 28 : ss = 1
    if sm > 19 : sm = 1
    if e == se and s == ss and m == sm : break
print(answer)
