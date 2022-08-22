from collections import defaultdict
import heapq
import sys

def solution(N, road, K):
    answer = 0
    INF = int(1e9)
    distance = [INF] * (N+1) #최단거리 테이블
    graph = [[] for _ in range(N+1)]
    for a,b,c in road :
        graph[a].append((c, b))
        graph[b].append((c, a))
    def dijkstra(start) :
        queue = []
        heapq.heappush(queue, (0,start))
        distance[start] = 0

        while queue :
            dist, now = heapq.heappop(queue)
            if distance[now] < dist : continue
            for i in graph[now] :
                cost = dist + i[0]
                if cost < distance[i[1]] :
                    distance[i[1]] = cost
                    heapq.heappush(queue, (cost, i[1]))
                
    dijkstra(1)
    for i in range(1, N+1) :
        if distance[i] <= K :
            answer+=1
    
    return answer
  
  # 다익스트라 알고리즘 정석.
