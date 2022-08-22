#include <iostream>
#include <algorithm>
#include <cmath>

using namespace std;

int dp[100001];

int main() {
    int n;
    scanf("%d", &n);
    
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    
    for(int i = 4; i <= n; i++) {
        int num = int(pow(int(pow(i, 0.5)), 2));
        
        if(i == num) dp[i] = 1;
        else {
            dp[i] = dp[i-1] + 1;
            for(int j = 1 ; j*j <= i ; j++) {
                dp[i] = min(dp[i], dp[i-j*j] + dp[j*j]);
            }
        }
    }
    
    printf("%d", dp[n]);
}


// https://www.acmicpc.net/source/share/78ef62d370d34172a451a56e8005711c
