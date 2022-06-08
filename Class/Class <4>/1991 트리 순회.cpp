#include <bits/stdc++.h>

using namespace std;


map<char, pair<char, char>> tree;
map<char, bool> visited;

void dfs(char v) { // 전위
    if(visited[v] || v == '.') return;
    visited[v] = true;
    cout << v;
    
    if(!visited[tree[v].first]) {
        dfs(tree[v].first);
    }
    if(!visited[tree[v].second]) {
        dfs(tree[v].second);
    }
}
void dfs2(char v) { // 중위
    if(visited[v] || v == '.') return;
    visited[v] = true;

    if(!visited[tree[v].first]) {
        dfs2(tree[v].first);
    }
    cout << v;
    if(!visited[tree[v].second]) {
        dfs2(tree[v].second);
    }
    
}
void dfs3(char v) { // 후위
    if(visited[v] || v == '.') return;
    visited[v] = true;
    
    if(!visited[tree[v].first]) {
        dfs3(tree[v].first);
    }
    if(!visited[tree[v].second]) {
        dfs3(tree[v].second);
    }
    
    cout << v;
}


int main() {
    int n; cin >> n;
    
    while(n-- > 0) {
        
        char start; char left; char right;
        cin >> start >> left >> right;
        
        tree[start] = make_pair(left, right);
        visited[start] = false;
    }
    dfs('A'); cout << '\n';
    for(auto it = visited.begin(); it != visited.end(); it++) {
        it->second = false;
    }
    dfs2('A'); cout << '\n';
    for(auto it = visited.begin(); it != visited.end(); it++) {
        it->second = false;
    }
    dfs3('A'); cout << '\n';
}
