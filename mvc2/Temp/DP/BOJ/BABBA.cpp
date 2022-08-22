#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    scanf("%d", &n);
    int da[46] = {0};
    int db[46] = {0};
    
    da[0] = db[0] = 0;
    da[1] = 0;
    db[1] = 1;
    da[2] = 1;
    db[2] = 1;
    
    
    for(int i = 3; i <= n; i++) {
        da[i] = da[i-1] + da[i-2];
        db[i] = db[i-1] + db[i-2];
    }
    
    printf("%d %d", da[n], db[n]);
    
}
