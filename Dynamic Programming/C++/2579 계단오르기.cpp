#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    scanf("%d", &n);
    int arr[302] = {0};
    int dp[302] = {0};
    for(int i = 1; i <= n; i++) {
        scanf("%d", &arr[i]);
    }
    
    dp[1] = arr[1];
    dp[2] = arr[1] + arr[2];
    
    
    for(int i = 3; i <= n; i++) {
        dp[i] = max(arr[i] + arr[i-1]+ dp[i-3], arr[i] + dp[i-2]);
    }
    
    printf("%d", dp[n]);
}
