#include <iostream>

using namespace std;

long long dp[46];

int main() {
    long long n;
    scanf("%lld", &n);
    dp[0] = dp[1] = 1;
    
    for(int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    printf("%lld", dp[n-1]);
    
}


// http://boj.kr/8970366503d440ea82b39dcf4efd9c67
