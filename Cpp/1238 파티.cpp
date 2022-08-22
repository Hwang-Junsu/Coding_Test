#include <bits/stdc++.h>
#define INF 2147483647

using namespace std;

int n,m,x;
int dist[1001];
bool visited[1001];
vector<pair<int, int>> graph[1001];

void dijkstra(int start) {
    
    dist[start] = 0;
    priority_queue<pair<int, int>> pq;
    pq.push(make_pair(0, start));
    
    while(!pq.empty()) {
        
        int now_dist = -pq.top().first;
        int now_node = pq.top().second;
        pq.pop();
        
        for(auto x : graph[now_node]) {
            int next_node = x.first;
            int next_dist = x.second;
            
            if(next_dist+now_dist < dist[next_node]) {
                dist[next_node] = next_dist+now_dist;
                pq.push(make_pair(-dist[next_node], next_node));
            }
        }
    }
    
}

void InitDist() {
    for(int i = 0 ; i <= n; i++) {
        dist[i] = INF;
        visited[i] = false;
    }  
}

int main() {
    cin >> n >> m >> x;
    
    for(int i = 0 ; i < m; i++) {
        
        int start, end, time;
        cin >> start >> end >> time;
        graph[start].push_back(make_pair(end, time));
        
    }
    int answer = 0;
    for(int i = 1; i <= n; i++) {
        int go = 0; int back = 0;
        InitDist(); dijkstra(i); go = dist[x];
        InitDist(); dijkstra(x); back = dist[i];
        answer = max(answer, go+back);
    }
    cout << answer;
}
