#include <iostream>
#include <algorithm>
using namespace std;

long long dp[91];

int main() {
    int n;
    scanf("%d", &n);
    
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    
    for(int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    printf("%lld", dp[n]);
}



// http://boj.kr/12a19e0dc9a744b595e912ef67504a60
