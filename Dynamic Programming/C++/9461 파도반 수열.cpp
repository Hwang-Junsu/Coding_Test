#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    scanf("%d", &n);
    long long dp[101] = {0};
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    dp[5] = 2;
    
    
    for(int i = 6; i <= 100 ; i++) {
        dp[i] = dp[i-1] + dp[i-5];
    }
    
    
    for(int i = 0 ; i < n; i++) {
        int num;
        scanf("%d", &num);
        printf("%lld\n", dp[num]);
    }
}

// http://boj.kr/06b7514316e043f49fb0555daf7fbd6e
