# Greedy (현재의 해가 최적의 해)
# 빨리 나가는 순서대로 정렬을 해주어야 답이 나옴.
# 코드를 짜는 구성은 맞았는데 빨리 들어온 순서대로 정렬을 하는 바람에 조금 헤매었음..


def solution(routes):
    answer = 1
    routes.sort(key = lambda x : (x[1], x[0]))
    for route in routes :
        route.sort()
    end = routes[0][1]
    
    for i in range(1,len(routes)) :
        if end >= routes[i][0] :
            pass
        else :
            end = routes[i][1]
            answer += 1
    
    return answer
