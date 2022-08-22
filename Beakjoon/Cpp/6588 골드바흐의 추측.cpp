#include <bits/stdc++.h>

using namespace std;

bool isPrime(int number) {
    if(number%2 == 0 || number == 1) return false;
    for(int i = 3; i <= int(sqrt(number)) ; i+=2) {
        if(number%i == 0) return false;
    }
    return true;
}

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    int n;
    while(true) {
        cin >> n;
        if(n == 0) break;
        int j = 0;
        for(int i = 1; i <= n; i++) {
            j = n-i;
            if(isPrime(i) && isPrime(j)) {
                printf("%d = %d + %d\n", n, i, j);
                break;
            }
        }
        if(j == 0) {
            cout << "Goldbach's conjecture is wrong." << '\n';
        }
    }
}


# 소수 매커니즘을 잘 이용하자.
