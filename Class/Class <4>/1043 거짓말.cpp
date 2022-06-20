// BFS, 집합
// 만나는 사람 그래프를 만들고, BFS를 통해 진실을 아는 사람들을 isKnown배열을 통해 저장한다.
// 파티에 진실을 아는 사람이 한명이라도 있으면 X 없다면 answer++

#include <bits/stdc++.h>

using namespace std;

vector<int> known;
vector<vector<int>> party;
vector<set<int>> relation(51);
bool isKnown[51];


void bfs() {
    deque<int> queue;
    
    for(int i = 0 ; i < known.size(); i++) {
        queue.push_back(known[i]);
        isKnown[known[i]] = true;
    }
    
    while(!queue.empty()) {
        
        int v = queue.front(); queue.pop_front();
        for(auto it : relation[v]) {
            
            if(!isKnown[it]) {
                isKnown[it] = true;
                queue.push_back(it);
            }
        }
        
    }
    
}

int main() {
    int n,m; cin >> n >> m;
    int kc; cin >> kc;
    for(int i = 0 ; i < kc; i++) {
        int num; cin >> num;
        known.push_back(num);
    }
    int answer = 0;
    while(m--) {
        
        int pc; cin >> pc;
        
        vector<int> temp;
        for(int i = 0; i < pc; i++) {
            int num; cin >> num;
            temp.push_back(num);
        }
        party.push_back(temp);
        
    }
    
    for(int p = 1; p <= n; p++) {
        for(int i = 0; i < party.size(); i++) {
            
            if(find(party[i].begin(), party[i].end(), p) != party[i].end()) {
                for(int j = 0 ; j < party[i].size(); j++) {
                    if(party[i][j] != p) relation[p].insert(party[i][j]); 
                }
            }
        }
    }
    
    bfs();
    
    for(int i = 0; i < party.size(); i++) {
        bool dont = false;
        for(int j = 0 ; j < party[i].size(); j++) {
            if(isKnown[party[i][j]]) {
                dont = true; break;
            }
        }
        if(!dont) answer++;
    }
    cout << answer;
}
