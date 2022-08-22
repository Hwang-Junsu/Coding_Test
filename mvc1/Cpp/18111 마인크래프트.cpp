
#include <bits/stdc++.h>

using namespace std;

bool compare(const pair<int ,int>& a, const pair<int, int>& b) {
    if(a.first == b.first) return a.second > b.second;
    return a.first < b.first;
}

int main() {
    int n,m,b;
    cin >> n >> m >> b;
    int board[501][501] = {0};
    for(int i = 0 ; i < n; i++) {
        for(int j = 0; j < m; j++) {
            cin >> board[i][j];
        }
    }
    vector<pair<int, int>> ans;
    
    for(int std = 0; std <= 256; std++) {
        int t = 0;
        int temp = b;
        for(int i = 0 ; i < n; i++) {
            for(int j = 0 ; j < m; j++) {
                int diff = abs(board[i][j] - std);
                if(board[i][j] == std) continue;
                
                if(board[i][j] > std) { // 기준보다 지면이 높다면 깎아야지.
                    t += (diff) * 2;
                    temp += (diff);
                }
                else {
                    t += (diff);
                    temp -= (diff);
                }
            }
        }
        
        if(temp >= 0) {
            ans.push_back(make_pair(t, std));
        }
    }

    sort(ans.begin(), ans.end(), compare);
    
    cout << ans[0].first << " " << ans[0].second;
    
}
