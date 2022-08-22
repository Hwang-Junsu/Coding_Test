#include <iostream>

using namespace std;

int dp[1000001];

int main() {
    int n;
    scanf("%d", &n);
    int count = 0;
    dp[2] = 1;
    dp[3] = 1;
    
    for(int i = 4; i <= n ; i++) {
        
        if(i%6 ==0) dp[i] = min(min(dp[i/3] + 1, dp[i/2] +1), dp[i-1] +1);
        else if(i%3 == 0) dp[i] = min(dp[i/3] + 1, dp[i-1] +1);
        else if(i%2 == 0) dp[i] = min(dp[i/2] + 1, dp[i-1] +1);
        else dp[i] = dp[i-1] + 1;
        
    }
    
    printf("%d", dp[n]);
}

// http://boj.kr/e031d72c597b4b47b4343e40a2b9886e
