#include <bits/stdc++.h>
#define INF 99999999

using namespace std;

int n,m,r;
int dist[101];
int items[101];
vector<pair<int, int>> graph[101];

void init() {
    for(int i = 0; i < 101; i++) {
        dist[i] = INF;
    }
}

void dijkstra(int start) {
    
    priority_queue<pair<int, int>> pq;
    pq.push({0, start});
    dist[start] = 0;
    
    while(!pq.empty()) {
        
        int now_dist = -pq.top().first; int now_node = pq.top().second;
        pq.pop();
        
        for(auto x : graph[now_node]) {
            
            int next_dist = x.first; int next_node = x.second;
            
            if(now_dist + next_dist < dist[next_node]) {
                dist[next_node] = now_dist + next_dist;
                pq.push({-dist[next_node], next_node});
            }
            
        }
    }
    
}

int main() {
    int answer = 0;
    cin >> n >> m >> r;
    for(int i = 1; i <= n; i++) {
        cin >> items[i];
    }
    for(int i = 0; i < r; i++) {
        int s,e,d; cin >> s >> e >> d;
        graph[s].push_back({d, e});
        graph[e].push_back({d, s});
    }
    
    for(int i = 1; i <= n; i++) {
        init();
        dijkstra(i);
        int sum = 0;
        for(int i = 1; i <= n; i++) {
            if(dist[i] <= m) {
                sum += items[i];
            }
        }
        
        answer = max(answer, sum);
    }
    
    cout << answer;
}
