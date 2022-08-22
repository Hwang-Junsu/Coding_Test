#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    scanf("%d", &n);
    int dp[12] = {0};
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    
    for(int i = 4; i <= 11 ; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    
    
    for(int i = 0 ; i < n; i++) {
        int num;
        scanf("%d", &num);
        printf("%d\n", dp[num]);
    }
}


// http://boj.kr/b2b5d51b590c450b9963001cb49b0d96
