#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> graph(1001, vector<int>());
bool visited[1001];

bool dfs(int start) {
    if(visited[start] == true) return false;
    
    visited[start] = true;
    for(int to : graph[start]) dfs(to);
    return true;
}

int main() {
    int n,m;
    cin >> n >> m;
    int answer = 0;
    for(int i = 0; i < m; i++) {
        int from; int to;
        cin >> from >> to;
        graph[from].push_back(to);
        graph[to].push_back(from);
    }
    
    for(int i = 1 ; i < n+1; i++) {
        if(dfs(i)) answer += 1;
    }
    
    
    cout << answer;
}
