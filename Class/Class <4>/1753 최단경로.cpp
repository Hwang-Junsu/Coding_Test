#include <bits/stdc++.h>
#define INF 2147483647

using namespace std;

int n,m;
vector<pair<int, int>> graph[20001];
int dist[20001];

void init() {
    for(int i = 0 ; i <= n; i++) {
        dist[i] = INF;
    }
}


void dijkstra(int start) {
    
    
    priority_queue<pair<int, int>> pq;
    dist[start] = 0;
    pq.push(make_pair(0, start));
    
    while(!pq.empty()) {
        
        int now_node = pq.top().second;
        int now_cost = -pq.top().first;
        pq.pop();
        
        for(auto x : graph[now_node]) {
            
            int next_node = x.second;
            int next_cost = x.first;
            
            if(next_cost + now_cost < dist[next_node]) {
                dist[next_node] = next_cost + now_cost;
                pq.push(make_pair(-dist[next_node], next_node));
            }
            
        }
        
        
    }

}


int main() {
    cin >> n >> m;
    int s; cin >> s;
    for(int i = 0 ; i < m ; i++) {
        int start, end, c;
        cin >> start >> end >> c;
        graph[start].push_back(make_pair(c, end));
    }
    
    
    
    init();
    dijkstra(s);
    
    for(int i = 1; i<= n; i++) {
        if(dist[i] == INF) cout << "INF" << '\n';
        else cout << dist[i] << '\n';
    }
}
