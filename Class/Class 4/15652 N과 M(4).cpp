#include<bits/stdc++.h>

using namespace std;



int n,m;
bool visited[9];

void dfs(int len, int num, string str) {
    
    if(len == m) {
        cout << str << '\n'; return;
    }
    
    for(int i = 1 ; i <= n; i++) {
        if(num <= i) {
            
            dfs(len + 1, i, str + to_string(i) + " ");
        }
    }
    
}


int main() {
    cin >> n >> m;

    dfs(0, 0, "");
}
