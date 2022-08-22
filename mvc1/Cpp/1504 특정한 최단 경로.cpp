// 반드시 지나야 하는 정점에 대해 역방향, 정방향 모두 검사를 해야함.
// 놓친 부분은 양방향그래프인것을 못봤음..

#include <bits/stdc++.h>
#define INF 9999999

using namespace std;

int n, m;
vector<pair<int, int>> graph[801];

int dijkstra(int start, int end) {
    int dist[801] = {0};
    for(int i = 0 ; i < 801; i++) {
        dist[i] = INF;
    }
    
    dist[start] = 0;
    priority_queue<pair<int, int>> pq;
    pq.push(make_pair(0, start));
    
    while(!pq.empty()) {
        int now_dist = -pq.top().first; int now_node = pq.top().second;
        pq.pop();
        
        for(auto x : graph[now_node]) {
            
            int next_dist = x.first; int next_node = x.second;
            if(now_dist + next_dist < dist[next_node]) {
                dist[next_node] = now_dist + next_dist;
                pq.push(make_pair(-dist[next_node], next_node));
            }
        }
    }
    
    return dist[end];
}

int main() {
    cin >> n >> m;
    for(int i = 0 ; i < m; i++) {
        int a,b,c; cin >> a >> b >> c;
        graph[a].push_back(make_pair(c,b));
        graph[b].push_back(make_pair(c,a));
    }
    int v1, v2; cin >> v1 >> v2;
    
    int answer = min(dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, n),
                dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, n));
    
    if(answer < 0 || answer >= INF) cout << -1;
    else cout << answer;
}
