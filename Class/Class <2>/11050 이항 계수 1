#include <bits/stdc++.h>

using namespace std;

int facto(int num) {
    if(num == 0) return 1;
    if(num == 1) return 1;
    
    return facto(num-1) * num;
}

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, m; cin >> n >> m;
    
    cout << facto(n) / (facto(m) * facto(n-m));
}
