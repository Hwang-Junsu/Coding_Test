# 순위를 알 수 있다. -> 모든 노드를 통과한다.

def solution(n, results):
    answer = 0
    
    win = [[] for i in range(n+1)]
    IO = [[0,0] for _ in range(n+1)]
    visited = [False for i in range(n+1)]
    
    for f,t in results :
        win[f].append(t)

    def dfs(v, start) :
        visited[v] = True

        if v != start :
            IO[v][0] += 1
            IO[start][1] += 1

        for x in win[v] :
            if not visited[x] :
                visited[x] = True
                dfs(x, start)
                
    for i in range(1, n+1) :
        dfs(i, i)
        visited = [False for i in range(n+1)]
    

    for i in range(1, n+1) :
        if IO[i][0] + IO[i][1] == n-1 :
            answer += 1
        
    return answer
  
  
  # 승패의 관계 여부를 떠나서 정점끼리의 관계에 대해서 탐색하면 되는 문제였음.
  # 정답 코드를 참고하여 힌트를 얻음.
  # 정점의 IN/OUT 리스트를 만들어 IN/OUT횟수가 N-1일 경우에 answer를 +1 해줌.
  # IN/OUT 횟수는 한 선수당 확인할 수 있는 경기 수임. 
