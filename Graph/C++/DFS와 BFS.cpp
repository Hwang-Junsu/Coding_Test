#include <bits/stdc++.h>

using namespace std;

vector<int> graph[10002];
bool visited[10002] = {false};


void dfs(int start) {
    
    stack<int> s;
    s.push(start); visited[start] = true;
    cout << start << ' ';
    
    while (!s.empty()) {
        int v = s.top();
        bool cantmove = true;
        for(auto to : graph[v]) {
            if(visited[to] == false) {
                s.push(to); visited[to] = true;
                cout << to << ' ';
                cantmove = false;
                break;
            }
        }
    if(cantmove) s.pop();
    }
}

void bfs(int start) {
    
    queue<int> q;
    q.push(start); visited[start] = true;
    
    while (!q.empty()) {
        int v = q.front();
        q.pop(); cout << v << ' ';
        
        for(int n : graph[v]) if(!visited[n]) {q.push(n); visited[n] = true;}
        
    }
    
    
    
}


int main() {
    int n,m,v;
    scanf("%d %d %d", &n, &m, &v);
    int size = m;
    
    while(size--) {
        int f, t; scanf("%d %d", &f, &t);
        graph[f].push_back(t);
        graph[t].push_back(f);
    }
    
    for(int r = 0 ; r < m+1; r++) {
        sort(graph[r].begin(), graph[r].end());
    }
    
    
    dfs(v);
    printf("\n");
    fill_n(visited, 10002, false);
    bfs(v);
    
}
