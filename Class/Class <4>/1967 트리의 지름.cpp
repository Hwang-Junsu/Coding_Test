#include <bits/stdc++.h>

using namespace std;

map<int, vector<pair<int, int>>> graph;
vector<int> save;
bool visited[10001];
int length = 0;


void dfs(int v, int now) {
    visited[v] = true;
    
    for(auto x : graph[v]) {
        if(!visited[x.first]) {
            length += x.second;
            dfs(x.first, x.second);
        }
    }
    if(save.size() > 0) {
        if(save.back() < length) {
            save.push_back(length);
            length -= now;
        }
    } else {
        save.push_back(length);
        length -= now;
    }
    
}


int main() {
    int n; cin >> n;
    int answer = 0;
    for(int i = 0 ; i < n-1; i++) {
        int start, end, c;
        cin >> start >> end >> c;
        
        graph[start].push_back(make_pair(end,c));
        graph[end].push_back(make_pair(start,c));
    }
    dfs(1, 0);
    
    for(int i = 0 ; i < save.size(); i++) {
        cout << save[i] << " ";
    }

}
