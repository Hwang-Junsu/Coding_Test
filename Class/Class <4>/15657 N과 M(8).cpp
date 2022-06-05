#include<bits/stdc++.h>

using namespace std;



int n,m;
bool visited[10001];
vector<int> vt;


void dfs(int len, int num, string str) {
    
    if(len == m) {
        cout << str << '\n'; return;
    }
    
    for(int i = 0 ; i < n; i++) {
        if(num <= vt[i]) {
            dfs(len + 1, vt[i], str + to_string(vt[i]) + " ");
        }
    }
    
}


int main() {
    cin >> n >> m;
    for(int i = 0; i < n; i++) {
        int num; cin >> num;
        vt.push_back(num);
    }
    sort(vt.begin(), vt.end());
    
    dfs(0, 0, "");
}
