#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n; cin >> n;
    vector<pair<int, int>> vt;
    
    vt.push_back(make_pair(1,0));
    vt.push_back(make_pair(0,1));
    
    for(int i = 2 ; i < 41; i++) {
        int zero = vt[i-1].first + vt[i-2].first;
        int one = vt[i-1].second + vt[i-2].second;
        
        
        vt.push_back(make_pair(zero, one));
    }
    
    while(n-- > 0) {
        int num; cin >> num;
        cout << vt[num].first << " " << vt[num].second << '\n';
    }
    
    
}
