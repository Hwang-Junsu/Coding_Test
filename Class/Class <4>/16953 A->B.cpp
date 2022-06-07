#include <bits/stdc++.h>

using namespace std;


int a,b;
map<long long, int> graph;

void bfs(long long start) {
    graph[start] = 1;
    deque<long long> queue;
    queue.push_back(start);
    
    while(!queue.empty()) {
        
        long long v = queue.front(); queue.pop_front();
        
        
        if(v*2 <= b && graph[v * 2] == 0) {
            graph[v * 2] = graph[v] + 1;
            queue.push_back(v*2);
        }
        if((v*10)+1 <= b && graph[v * 10 + 1] == 0) {
            graph[v * 10 + 1] = graph[v] + 1;
            queue.push_back(v*10 + 1);
        }
    }
    
    
}

int main() {
    cin >> a >> b;
    bfs(a);
    
    if(graph[b] == 0) cout << -1;
    else cout << graph[b];
}
