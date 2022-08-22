#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, m; cin >> n >> m;
    vector<int> vt;
    int hap = 0;
    while(n-- > 0) {
        int num; cin >> num;
        hap += num;
        vt.push_back(hap);
    }
    while(m-- > 0) {
        int start, end;
        cin >> start >> end;
        
        cout << vt[end-1] - vt[start-2] << '\n';
    }
    
}
