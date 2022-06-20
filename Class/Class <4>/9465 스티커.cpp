// 다이나믹 프로그래밍
// 2차원으로 dp 처리함.

#include <bits/stdc++.h>

using namespace std;

int main() {
    int t; cin >> t;
    int num;
    int st[2][100001];
    int dp[2][100001];
    while(t-- > 0) {
        for(int i = 0; i < 2; i++) {
            memset(st[i], 0, sizeof(st[i]));
            memset(dp[i], 0, sizeof(dp[i]));
        }
        
        int a; cin >> a;
        for(int i = 0 ; i < a; i++) {
            cin >> num; st[0][i] = num;
        }
        for(int i = 0 ; i < a; i++) {
            cin >> num; st[1][i] = num;
        }
        
        dp[0][0] = st[0][0]; dp[1][0] = st[1][0];
        
        for(int i = 1; i < a; i++) {
            dp[0][i] = max(dp[1][i-1] + st[0][i], dp[0][i-1]);
            dp[1][i] = max(dp[0][i-1] + st[1][i], dp[1][i-1]);
        }
        cout << max(dp[0][a-1], dp[1][a-1]) << '\n';
    }
}
