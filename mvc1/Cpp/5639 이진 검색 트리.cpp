#include <bits/stdc++.h>

using namespace std;

map<int, pair<int, int>> graph;
map<int, bool> visited;
void dfs(int v) {
    
    if(visited[v] || v == 0) return;
    visited[v] = true;
    
    if(!visited[graph[v].first]) {
        dfs(graph[v].first);
    }
    if(!visited[graph[v].second]) {
        dfs(graph[v].second);
    }
    cout << v << '\n';
    
}
int main() {
    int start; cin >> start;
    stack<int> parent; parent.push(start);
    int front = 0;
    while(!cin.eof()) {
        int n; cin >> n;
        
        if(parent.top() > n) {
            graph[parent.top()].first = n;
            parent.push(n); 
        } else {
            while(true) {
                front = parent.top();
                parent.pop();
                if(parent.size() == 0) break;
                if(parent.top() > n) break;
            }
            graph[front].second = n;
            parent.push(n);
        }
    }
    dfs(start);
    
}
