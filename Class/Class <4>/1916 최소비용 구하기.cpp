
#include <bits/stdc++.h>
#define INF 2147483647

using namespace std;

int n,m;
vector<pair<int, int>> graph[1001];
int dist[1001];

void init() {
    for(int i = 0 ; i <= n; i++) {
        dist[i] = INF;
    }
}


void dijkstra(int start, int end) {
    
    
    priority_queue<pair<int, int>> pq;
    dist[start] = 0;
    pq.push(make_pair(0, start));
    
    while(!pq.empty()) {
        
        int now_dist = -pq.top().first;
        int now_node = pq.top().second;
        if(now_node == end) break;
        pq.pop();
        
        for(auto x : graph[now_node]) {
            int next_dist = x.first;
            int next_node = x.second;
            
            if(now_dist + next_dist < dist[next_node]) {
                
                dist[next_node] = now_dist + next_dist;
                pq.push(make_pair(-dist[next_node], next_node));
            }
        }
    }

}


int main() {
    cin >> n >> m;

    for(int i = 0 ; i < m ; i++) {
        int start, end, c;
        cin >> start >> end >> c;
        graph[start].push_back(make_pair(c, end));
    }
    int st,ed;
    cin >> st >> ed;
    
    
    init();
    dijkstra(st,ed);

    cout << dist[ed];
}
