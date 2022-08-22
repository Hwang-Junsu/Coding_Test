def solution(name):
    answer = []
    horizon = 0; vertical = 0;
    for ch in name :
        count = (ord(ch) - ord('A')) if ord('O') > ord(ch) else (ord('Z') - ord('A')) - ((ord(ch) - ord('A')) - 1)
        horizon += count
    
    for i in range(4) :
        vertical = 0;
        string = ['A' for _ in range(len(name))]
        visited = [False for _ in range(len(name))]
        namel = [ch for ch in name]
        count = 0
        string[0] = namel[0]; visited[0] = True
        Rcursor = 0; Lcursor = 0        
        
        while True :
            if string == namel : break
            LR_count = [0,0]
            save = Rcursor
            disR = 0
            while True :
                Rcursor += 1
                disR += 1
                if Rcursor > len(name)-1 : Rcursor = 0
                if Rcursor == save : break
                if name[Rcursor] != 'A' and visited[Rcursor] == False :
                    LR_count[1] = disR
                    break
            save = Lcursor
            disL = 0
            while True :
                Lcursor -= 1
                disL += 1
                if Lcursor < 0 : Lcursor = len(name)-1
                if Lcursor == save : break
                if name[Lcursor] != 'A' and visited[Lcursor] == False :
                    LR_count[0] = disL
                    break
            if i == 0 :
                if LR_count[0] <= LR_count[1] :
                    string[Lcursor] = namel[Lcursor]
                    visited[Lcursor] = True
                    Rcursor = Lcursor; vertical += disL
                elif LR_count[0] > LR_count[1] :
                    string[Rcursor] = namel[Rcursor]
                    visited[Rcursor] = True
                    Lcursor = Rcursor; vertical += disR
            elif i == 1 :
                if LR_count[0] < LR_count[1] :
                    string[Lcursor] = namel[Lcursor]
                    visited[Lcursor] = True
                    Rcursor = Lcursor; vertical += disL
                elif LR_count[0] >= LR_count[1] :
                    string[Rcursor] = namel[Rcursor]
                    visited[Rcursor] = True
                    Lcursor = Rcursor; vertical += disR
            elif i == 2 :
                if LR_count[0] < LR_count[1] + 2:
                    string[Lcursor] = namel[Lcursor]
                    visited[Lcursor] = True
                    Rcursor = Lcursor; vertical += disL
                elif LR_count[0] > LR_count[1] :
                    string[Rcursor] = namel[Rcursor]
                    visited[Rcursor] = True
                    Lcursor = Rcursor; vertical += disR
                else :
                    rt = Rcursor; lt = Lcursor;
                    rc = 0; lc = 0;
                    while True :
                        lt -= 1
                        if lt < 0 : lt = len(name)-1
                        if Lcursor == lt : break
                        if namel[lt] != 'A' and visited[lt] == False :
                            lc += 1
                    while True :
                        rt += 1
                        if rt > len(name)-1 : rt = 0
                        if Lcursor == rt : break
                        if namel[rt] != 'A' and visited[rt] == False :
                            rc += 1; 
                    if lc >= rc :
                        string[Lcursor] = namel[Lcursor]
                        visited[Lcursor] = True
                        Rcursor = Lcursor; vertical += disL
                    else :
                        string[Rcursor] = namel[Rcursor]
                        visited[Rcursor] = True
                        Lcursor = Rcursor; vertical += disR 
                        
            elif i == 3 :
                if LR_count[0] < LR_count[1] - 2 :
                    string[Lcursor] = namel[Lcursor]
                    visited[Lcursor] = True
                    Rcursor = Lcursor; vertical += disL
                elif LR_count[0] > LR_count[1] :
                    string[Rcursor] = namel[Rcursor]
                    visited[Rcursor] = True
                    Lcursor = Rcursor; vertical += disR
                else :
                    rt = Rcursor; lt = Lcursor;
                    rc = 0; lc = 0;
                    while True :
                        lt -= 1
                        if lt < 0 : lt = len(name)-1
                        if Lcursor == lt : break
                        if namel[lt] != 'A' and visited[lt] == False :
                            lc += 1
                    while True :
                        rt += 1
                        if rt > len(name)-1 : rt = 0
                        if Lcursor == rt : break
                        if namel[rt] != 'A' and visited[rt] == False :
                            rc += 1; 
                    if lc < rc :
                        string[Lcursor] = namel[Lcursor]
                        visited[Lcursor] = True
                        Rcursor = Lcursor; vertical += disL
                    else :
                        string[Rcursor] = namel[Rcursor]
                        visited[Rcursor] = True
                        Lcursor = Rcursor; vertical += disR 
        answer.append(horizon + vertical)

    return min(answer)

# 모든 테스트케이스를 넣어서 억지로 풀었음. 다시 풀어야할듯 함.
