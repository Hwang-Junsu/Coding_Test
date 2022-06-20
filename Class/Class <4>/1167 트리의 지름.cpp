// 트리의 지름은 임의의 한 지점에서 가장 먼 노드를 선택하고, 그 노드로부터 가장 먼 노드의 거리를 구하면 됨.
// 노드를 구슬 가중치를 실의 길이라고 생각하면 쉬움.
// 입력 데이터 때문에..

#include <bits/stdc++.h>

using namespace std;

int n; 
map<int, vector<pair<int, int>>> graph;
int dst[100001];
bool visited[100001];

void dfs(int v) {
    
    visited[v] = true;
    for(auto x : graph[v]) {
        if(!visited[x.first]) {
            dst[x.first] += dst[v] + x.second;
            dfs(x.first);
        }
    }
    
    
}

void init() {
    for(int i = 0; i <= n; i++) {
        dst[i] = 0;
        visited[i] = false;
    }
}

int main() {
    cin >> n;
    int answer = 0;
    for(int i = 0 ; i < n ; i++) {
        int start, end, dist;
        int count = 0;
        cin >> start;
        while(true) {
            cin >> end;
            if(end == -1) break;
            cin >> dist;
            graph[start].push_back(make_pair(end, dist));
        }
    }
    dfs(1);
    int furthest = 0;
    for(int i = 2 ; i <= n; i++) {
        if(dst[furthest] < dst[i]) {
            furthest = i;
        }
    }
    init();
    dfs(furthest);
    for(int i = 1 ; i <= n; i++) {
        answer = max(answer, dst[i]);
    }
    cout << answer;
}
