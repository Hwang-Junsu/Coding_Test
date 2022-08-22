#include <bits/stdc++.h>

using namespace std;

int main() {
    int n, m;
    int answer = 0;
    vector<int> vt;
    cin >> n >> m;
    for(int i = 0 ; i < n; i++) {
        int num; cin >> num;
        vt.push_back(num);
    }
    sort(vt.begin(), vt.end());
    
    for(int i = 0 ; i < n; i++) {
        if(i > m) break;
        for(int j = i+1; j < n; j++) {
            if(vt[i] + vt[j] == m) answer++;
        }
    }
    
    cout << answer;
}
