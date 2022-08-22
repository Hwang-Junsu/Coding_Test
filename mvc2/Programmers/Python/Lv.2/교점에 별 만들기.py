# 나의 접근
# 1. 일단 정수인 점과 별은 boolean 2차원 리스트를 만들어서 True일 경우에만 별을 찍도록 해야됨.

def solution(line):
    answer = []
    
    index = []
    temp = []
    
    for i in range(len(line)) :
        for j in range(i+1, len(line)) :
            bottom =  (line[i][0] * line[j][1]) - (line[i][1] * line[j][0])
            if bottom == 0 :
                continue
            x = ((line[i][1] * line[j][2]) - (line[i][2] * line[j][1])) / bottom
            y = ((line[i][2] * line[j][0]) - (line[i][0] * line[j][2])) / bottom
            index.append((x,y))
    
    index = list(set(index))
    
    if len(index) == 1 : # 교점이 하나인 경우는 어짜피 별을 하나 찍음.
        return ["*"]
    
    for x, y in index :
        if float.is_integer(x) and float.is_integer(y) :
            temp.append([int(y)-1,int(x)-1])

    minx = 10**17; maxx = 0; miny = 10**17; maxy = 0;
    for idx in temp :
        minx = min(minx, idx[0])
        miny = min(miny, idx[1])

    if minx < 0 :
        for i in range(len(temp)) :
            temp[i][0] = temp[i][0] + abs(minx)
    elif minx > 0 :
        for i in range(len(temp)) :
            temp[i][0] = temp[i][0] - minx
    if miny < 0 :
        for i in range(len(temp)) :
            temp[i][1] = temp[i][1] + abs(miny)
    elif miny > 0:
        for i in range(len(temp)) :
            temp[i][1] = temp[i][1] - miny
    for idx in temp :
        maxx = max(maxx, idx[0])
        maxy = max(maxy, idx[1])
    wid = maxy + 1; hei = maxx + 1
    draw = [[False for _ in range(wid)] for _ in range(hei)]
    for x,y in temp :
        draw[x][y] = True

    for i in range(len(draw)) :
        row = ""
        for j in range(len(draw[i])) :
            if draw[i][j] == True :
                row += "*"
            else :
                row += "."
        answer.append(row)
    answer.reverse()
    
    return answer
  
# 컴퓨터의 좌표개념과 수학적 그래프의 좌표를 변환해주는 과정에 대해 생각을 해야하는 문제.
