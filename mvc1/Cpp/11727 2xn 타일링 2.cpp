
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    scanf("%d", &n);
    int dp[1001] = {0};
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 3;
    dp[3] = 5;

    
    
    for(int i = 4; i < 1001 ; i++) {
        dp[i] = (dp[i-1] + dp[i-2]*2)%10007;
    }
    printf("%d", dp[n]);

}


// http://boj.kr/d7c33d59e1cc43bd84c9093846b2ee7d
