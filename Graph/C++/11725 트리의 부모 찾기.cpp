#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> graph(100001, vector<int>());
int answer[100001];

void dfs(int start) {
    for(int to : graph[start]) {
        if(answer[to] == 0) {
            answer[to] = start;
            dfs(to);
        }
    }
}

int main() {
    int n;
    cin >> n;
    for(int i = 0; i < n-1; i++) {
        int from; int to;
        cin >> from >> to;
        graph[from].push_back(to);
        graph[to].push_back(from);
    }
    dfs(1);
    for(int i = 2; i < n+1; i++) {
        cout << answer[i] << '\n';
    }
}
