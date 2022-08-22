#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    scanf("%d", &n);
    int dp[1001] = {0};
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;

    
    
    for(int i = 4; i < 1001 ; i++) {
        dp[i] = (dp[i-1] + dp[i-2])%10007;
    }
    printf("%d", dp[n]);

}

// http://boj.kr/69fae87f31fd48a19204f341d6e09a66
