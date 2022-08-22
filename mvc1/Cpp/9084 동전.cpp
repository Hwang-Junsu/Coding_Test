#include <bits/stdc++.h>

using namespace std;

int c[21];
int v[21];
int dp[21][10001];

int main() {
    int t; cin >> t;
    while(t-- > 0) {
        
        int n; cin >> n;
        for(int i = 1; i <= n; i++) {
            cin >> c[i];
        }
        int p; cin >> p;
        
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= p; j++) {
                
                if(j % c[i] == 0) {
                    
                    dp[i][j] = max(dp[i-1][j]);
                    
                    
                } else {
                    
                    dp[i][j] = dp[i-1][j];
                    
                }
            }
        }
        

    }
}
