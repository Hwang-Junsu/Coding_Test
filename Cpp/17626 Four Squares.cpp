// DP.
// 메모이제이션을 하는 과정에서 전 구간을 순회하는 알고리즘을 사용해서 시간초과가 남.
// 제곱수가 아닌경우에서는 어짜피 최소값이 2가됨을 인지하고 break조건을 걸어줌.

#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n; cin >> n;
    
    int dp[50001] = {0};
    
    dp[1] = 1; dp[2] = 2; dp[3] = 3;
    
    for(int i = 4; i <= n; i++) {
        
        if(int(pow(int(pow(i, 0.5)), 2)) == i) {
            dp[i] = 1;
        }
        else {
            int mn = 5;
            for(int j = 1; j <= i/2; j++) {
                mn = min(mn, dp[j] + dp[i-j]);
                if(mn == 2) break;
            }
            dp[i] = mn;
        }
    }
    cout << dp[n];
}
