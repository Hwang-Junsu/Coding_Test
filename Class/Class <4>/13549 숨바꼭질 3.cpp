// 다익스트라 문제.
// 처음 코딩시 bfs로 접근하여 틀림. 각 노드로 가는 간선이 가중치가 0과 1로 다르기 때문에
// 함부로 bfs로 접근하면 안됨. 가중치가 다른 최단거리를 찾는 문제이므로 다익스트라를 적용해줌.

#include <bits/stdc++.h>
#define INF 99999999

using namespace std;


void bfs(int dist[], vector<pair<int, int>> graph[], int start) {
    
    dist[start] = 0;
    priority_queue<pair<int, int>> pq;
    pq.push(make_pair(0, start));
    
    while(!pq.empty()) {
        
        auto v = pq.top(); pq.pop();
        int now_dist = -v.first; int now_node = v.second;
        for(auto x : graph[now_node]) {
            
            int next_node = x.second; int next_dist = x.first;
            
            if(now_dist + next_dist < dist[next_node]) {
                dist[next_node] = now_dist + next_dist;
                pq.push(make_pair(-dist[next_node], next_node));
            }
        }
    }
    
}

int main() {
    int n, k; cin >> n >> k;
    vector<pair<int, int>> graph[200001];
    int dist[200001];
    
    graph[0].push_back(make_pair(1,1));
    for(int i = 1; i < 100001; i++) {
        graph[i].push_back(make_pair(1, i-1));
        graph[i].push_back(make_pair(1, i+1));
        graph[i].push_back(make_pair(0, i*2));
    }

    for(int i = 0; i < 200001; i++) {
        dist[i] = INF;
    }
    
    bfs(dist, graph, n);
    
    cout << dist[k];
    
    
}
