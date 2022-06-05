#include<bits/stdc++.h>

using namespace std;



int n,m;
bool visited[9];

void dfs(int len, int num, string str) {
    
    if(len == m) {
        cout << str << '\n'; return;
    }
    
    for(int i = 1 ; i <= n; i++) {
        if(!visited[i] && num <= i) {
            
            visited[i] = true;
            dfs(len + 1, i, str + to_string(i) + " ");
            visited[i] = false;
        }
    }
    
}


int main() {
    cin >> n >> m;
    
    
    dfs(0, 0, "");
}
