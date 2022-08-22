hei = [int(input()) for i in range(9)]; hei.sort()
lier1 = 0; lier2 = 0
for i in range(9) :
    for j in range(i+1, 9) :
        s = sum(hei) - hei[i] - hei[j]
        if s == 100 :
            lier1 = i; lier2 = j; break
for i in range(9) :
    if i == lier1 or i == lier2 : continue
    print(hei[i])
