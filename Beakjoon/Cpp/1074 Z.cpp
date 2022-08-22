
#include <bits/stdc++.h>

using namespace std;

int my_pow(int n, int p) {
    int result = n;
    for(int i = 0; i < p-1 ; i++) {
        result *= n;
    }
    return result;
}

int four_divide(int size, int r, int c) {
    int n_size = floor(my_pow(2, size)) / 2;
    
    if(n_size > r && n_size > c) return 1;
    if(n_size > r && n_size <= c) return 2;
    if(n_size <= r && n_size > c) return 3;
    if(n_size <= r && n_size <= c) return 4;
    
    return 0;
}

int main() {
    int n,r,c;
    cin >> n >> r >> c;
    long long start = 0; long long end = int(pow(2,n)) * int(pow(2,n));
    long long area = int(pow(2,n)) * int(pow(2,n)); int size = n;
    while(true) {
        if(n == 0) break;
        
        switch(four_divide(n, r, c)) {
            
            case 1 :
                start += 0; end -= (area / 4) * 3; 
                r += 0; c += 0; break;
            case 2 : 
                start += (area / 4); end -= (area / 4) * 2; 
                c -= int(pow(2, n-1)); break;
            case 3 : 
                start += (area / 4) * 2; end -= (area / 4) * 1; 
                r -= int(pow(2,n-1)); break;
            case 4 :
                start += (area / 4) * 3; end -= 0; 
                r -= int(pow(2,n-1)); c -= int(pow(2, n-1)); break;
        }
        area /= 4;
        
        cout << start << " " << end << '\n';
        n--;
    }
    cout << start;
}
