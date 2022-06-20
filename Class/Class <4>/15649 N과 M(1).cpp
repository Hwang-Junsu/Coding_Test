// 백트레킹 기법 연습.

#include<bits/stdc++.h>

using namespace std;



int n,m;
bool visited[9];

void dfs(int number, string str) {
    
    if(number > m) {
        cout << str << '\n'; return;
    }
    
    for(int i = 1 ; i <= n; i++) {
        if(!visited[i]) {
            
            visited[i] = true;
            dfs(number + 1, str + to_string(i) + " ");
            visited[i] = false;
        }
    }
    
}


int main() {
    cin >> n >> m;
    dfs(1, "");
}
