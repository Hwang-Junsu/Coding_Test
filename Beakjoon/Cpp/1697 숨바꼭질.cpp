#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> graph(200004, vector<int>());
bool visited[200004];
int dist[200004];
int n, k;

void bfs(int start) {
    
    dist[start] = 0;
    visited[start] = true;
    queue<int> queue;
    queue.push(start);
    
    while(!queue.empty()) {
        int v = queue.front(); queue.pop();
        for(int x : graph[v]) {
            if(!visited[x]) {
                visited[x] = true;
                dist[x] = dist[v] + 1;
                queue.push(x);
            }
        }
    }
    
    
    
}

int main() {
    cin >> n >> k;

    fill_n(dist, 200004, -1);
    for(int i = 0; i < 100002; i++) {
        
        if(i != 0) graph[i].push_back(i-1);
        graph[i].push_back(i+1);
        graph[i].push_back(i*2);
    }
    
    bfs(n);

    cout << dist[k];
}
