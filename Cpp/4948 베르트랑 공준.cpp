#include <bits/stdc++.h>

using namespace std;


bool isPrime(int number) {
    if(number%2 == 0) return false;
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
        if(n==0) break;
        if(n==1) {
            cout << 1 << '\n';
            continue;
        }
        int count = 0;
        for(int i = n+1; i <= 2*n; i++) {
            if(isPrime(i)) count++;
        }
        cout << count << '\n';
    }
}
