// Knapsack DP문제
// 핵심은 subproblem을 나눌때에 고려해보아야 하는 것이 무엇인지.
// 물건을 넣었을 때, 넣지 않을 때,

#include <bits/stdc++.h>

using namespace std;


int w[101];
int v[101];
int dp[101][100001];

int main() {
    int n,k; cin >> n >> k;
    for(int i = 1; i <= n; i++) {
        cin >> w[i] >> v[i];
    }
    
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= k; j++) {
            
            if(j - w[i] >= 0) { // 가방에 넣을 자리가 있으면.
                
                dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i]] + v[i]);
                
            }
            
            else {
                dp[i][j] = dp[i-1][j];
            }
            
        }
    }
    
    cout << dp[n][k];
}
