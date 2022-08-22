def solution(n, words):
    answer = [0, 0]
    
    prew = words[0][0]
    index = 0
    rotate = 1
    redup = []
    for w in words :
        index += 1
        if index == n+1 :
            index = 1; rotate += 1

        if prew[len(prew)-1] == w[0] and w not in redup :
            redup.append(w)
            prew = w
        else :
            answer[0] = index; answer[1] = rotate
            break
        

    return answer
