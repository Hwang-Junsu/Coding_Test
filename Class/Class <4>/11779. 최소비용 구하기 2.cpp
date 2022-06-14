// 다익스트라
// 다익스트라의 경로를 추적하는 방법에 대해 공부가 된 문제였던 것 같음.

#include <bits/stdc++.h>

using namespace std;

vector<pair<int, int>> graph[1001];
int dist[1001];
int route[1001]; 
int n, m;

void dijkstra(int start, int end) {
    priority_queue<pair<int, int>> pq;
    dist[start] = 0;
    pq.push(make_pair(0,start));
    
    while(!pq.empty()) {
        
        int now_dist = -pq.top().first; int now_node = pq.top().second;
        if(now_node == end) break;
        pq.pop();
        
        for(auto x : graph[now_node]) {
            
            int next_dist = x.first; int next_node = x.second;
            
            if(now_dist + next_dist < dist[next_node]) {
                route[next_node] = now_node; // 결국 마지막에 if문이 통과한 노드가 최소값의 경로임.
                dist[next_node] = now_dist + next_dist;
                pq.push(make_pair(-dist[next_node], next_node));
            }
        }
        
        
        
    }
}

void INIT() {
    for(int i = 0 ; i < 1001; i++) {
        dist[i] = 2147483647;
    }
}


int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> n >> m; // n - 도시, m - 버스
    for(int i = 0; i < m; i++) {
        int f,t,c; cin >> f >> t >> c;
        graph[f].push_back(make_pair(c,t));
    }
    int start, end; cin >> start >> end;
    
    INIT();
    dijkstra(start, end);
    
    
    vector<int> show_route;
    int arrive = end;
    while(arrive) { // 끝 지점부터 시작하여 역추적.
        show_route.push_back(arrive);
        arrive = route[arrive];
    }
    
    cout << dist[end] << '\n';
    cout << show_route.size() << '\n';
    for(int i = show_route.size()-1 ; i >= 0; i--) {
        cout << show_route[i] << " ";
    }
    
    
    
}
