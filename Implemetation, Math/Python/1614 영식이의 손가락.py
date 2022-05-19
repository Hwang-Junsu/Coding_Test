hurt = int(input()); count = int(input())
answer = 0
if hurt % 2 == 0 :
    if hurt == 2 :
        if count % 2 == 1 :
            answer += (2 * ((count + 1) //2))
            answer += (6 * ((count + 1) //2))
            answer -= 1
        else :
            answer += (2 * (count//2))
            answer += (6 * (count//2))
            answer += 1
    else :
        answer += 4
        if count%2 == 0 :
            answer += (2 * (count//2))
            answer += (6 * (count//2))
            answer -= 1
        else :
            answer += 2 * ((count + 1) // 2)
            answer += 6 * (((count + 1) // 2)-1)
            answer -= 1
else :
    answer += (hurt-1)
    if hurt == 3 : answer += (count * 4)
    else : answer += (count * 8)

print(answer)
