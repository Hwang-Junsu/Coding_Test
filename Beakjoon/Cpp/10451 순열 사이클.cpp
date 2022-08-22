#include <bits/stdc++.h>

using namespace std;

vector<int> graph[1001];
bool check[1001] = {false};

bool bfs(int start) {
    
    if(check[start] == true) return false;
    queue<int> q;
    q.push(start); check[start] = true;
    
    while(!q.empty()) {
        int from = q.front(); q.pop();
        for(int v : graph[from]) {
            if(!check[v]) {q.push(v); check[v] = true;}
        }
    }
    return true;
}

int main() {
    int t;
    scanf("%d", &t);
    
    while(t--) {
        int n;
        scanf("%d", &n);
        
        fill_n(check, 1001, false);
        for(int vi = 0 ; vi < 1001; vi++) {
            graph[vi].clear();
        }
        int answer = 0;
        
        for(int j = 1; j <= n; j++) {
            int num;
            cin >> num;
            graph[j].push_back(num);
        }
        
        for(int i = 1; i <= n; i++) {
            if(bfs(i)) answer += 1;
        }
        
        printf("%d\n", answer);
    }
    
}
