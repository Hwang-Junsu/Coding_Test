#include <iostream>

using namespace std;

int dp[46];

int main() {
    int n;
    scanf("%d", &n);
    dp[0] = dp[1] = 1;
    
    for(int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    printf("%d", dp[n-1]);
    
}

// http://boj.kr/38acaef41395445f88075a2e47fae145
