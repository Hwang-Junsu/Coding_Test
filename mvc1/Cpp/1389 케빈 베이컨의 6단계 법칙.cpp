#include <bits/stdc++.h>

using namespace std;

int n,m;
vector<vector<int>> graph(101, vector<int>());
int visited[101];
int min_value = 10000;

void init() {
    fill_n(visited, 101, -1);
}

int bfs(int start) {
    
    vector<int> result;
    queue<int> queue;
    queue.push(start);
    visited[start] = 0;
    
    while(!queue.empty()) {
        
        int v = queue.front();
        queue.pop();
        
        for(int to : graph[v]) {
            if(visited[to] < 0) {
                visited[to] = visited[v] + 1;
                queue.push(to);
                result.push_back(visited[to]);
            }
        }
        
        
    }
    return accumulate(result.begin(), result.end(), 0);
}

int main() {
    vector<int> answer;
    cin >> n >> m;
    for(int i = 0 ; i < m; i++) {
        int from; int to;
        cin >> from >> to;
        
        graph[from].push_back(to);
        graph[to].push_back(from);
    }

    for(int i = 1; i < n+1; i++) {
        init();
        int value = bfs(i);
        min_value = min(min_value, value);
        answer.push_back(value);
    }
    
    cout << find(answer.begin(), answer.end(), min_value) - answer.begin() + 1;
}
