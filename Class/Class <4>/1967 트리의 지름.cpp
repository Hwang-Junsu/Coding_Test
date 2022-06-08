// dfs를 2번 이용하자.
// 먼저 임의의 노드 a에서 가장 먼 노드를 찾는다.
// 가장 먼 노드 b에서 가장 먼 노드를 찾고 그 거리를 계산한다.

#include <bits/stdc++.h>

using namespace std;

map<int, vector<pair<int, int>>> graph;
bool visited[10001];
int dist[10001];


void dfs(int v) {
    visited[v] = true;
    
    for(auto x : graph[v]) {
        if(!visited[x.first]) {
            dist[x.first] = dist[v] + x.second;
            dfs(x.first);
        }
    }
    
}

void init() {
    memset(dist, 0, sizeof(dist));
    memset(visited, false, sizeof(visited));
}


int main() {
    int n; cin >> n;
    int answer = 0;
    for(int i = 0 ; i < n-1; i++) {
        int start, end, c;
        cin >> start >> end >> c;
        
        graph[start].push_back(make_pair(end,c));
        graph[end].push_back(make_pair(start,c));
    }
    dfs(1);
    int furthest = dist[0];
    for(int i = 2 ; i <= n; i++) {
        if(dist[furthest] < dist[i]) {
            furthest = i;
        }
    }
    init();
    dfs(furthest);
    for(int i = 1 ; i <= n; i++) {
        answer = max(answer, dist[i]);
    }
    cout << answer;

}
