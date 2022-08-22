#include <bits/stdc++.h>

using namespace std;


vector<int> graph[201];
vector<int> combi;

bool dfs(int x, int y) {
    
    for(int to : graph[x]) {
        if(to == y) return false;
    }
    
    return true;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, m;
    vector<int> icecream;
    vector<int> index;
    int answer = 0;
    cin >> n >> m;
    for(int i = 1; i <= n; i++) {
        icecream.push_back(i);
    }
    for(int i = 0 ; i < 3; i++) {
        index.push_back(0);
    }
    for(int i = 0; i < n-3; i++) {
        index.push_back(1);
    }
    while(m--) {
        int dont1, dont2;
        cin >> dont1 >> dont2;
        graph[dont1].push_back(dont2);
        graph[dont2].push_back(dont1);
    }
    
    do {
        for(int i = 0 ; i < index.size(); i++) {
            if(index[i] == 0) combi.push_back(icecream[i]);
        }
        bool can = true;
        for(int i = 0 ; i < combi.size(); i++) {
            for(int j = i; j < combi.size(); j++) {
                if(!dfs(combi[i], combi[j])) {
                    can = false; break;
                } 
            }
        }
        if(can) answer += 1;
        combi.clear();
    } while(next_permutation(index.begin(), index.end()));
    cout << answer;
}


# find함수를 이용하여 완전 탐색을 하려고 했으나, 시간초과 발생함.
# dfs(?)를 사용한 시간초과 해결방안.
