#include <bits/stdc++.h>

using namespace std;

int main() {
    int n; cin >> n;
    vector<pair<int, int>> vt;
    vector<int> rank;
    while(n-- > 0) {
        int x, y; cin >> x >> y;
        vt.push_back(make_pair(x,y));
    }
    for(int i = 0; i < vt.size(); i++) {
        int r = 0;
        for(int j = 0; j < vt.size(); j++) {
            if(i == j) continue;
            if(vt[i].first < vt[j].first && vt[i].second < vt[j].second) {
                r++;
            }
        }
        rank.push_back(r);
    }
    
    
    for(int i = 0 ; i < rank.size(); i++) {
        cout << rank[i]+1 << " ";
    }
}
