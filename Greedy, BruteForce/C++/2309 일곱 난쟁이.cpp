#include <bits/stdc++.h>

using namespace std;

int main() {
    vector<int> hei(9,0);
    for(int i = 0; i < 9; i++) {
        cin >> hei[i];
    }
    sort(hei.begin(), hei.end()); // 미리 정렬
  
    // 거짓말 쟁이 2명을 Brute Force를 이용하여 가려내자.
    int sum = 0; int lier1 = 0; int lier2 = 0;
    for(int i = 0; i < 9; i++) {
        for(int j = i+1; j < 9; j++) {
            // 두 난쟁이의 키를 뺐을 때 키가 100이되면 break
            sum = accumulate(hei.begin(), hei.end(), 0) - hei[i] - hei[j];
            if(sum == 100) {
                lier1 = i; lier2 = j;
                break;
            }
        }
    }
    for(int i = 0 ; i < 9; i++) {
       if(i != lier1 && i != lier2) cout << hei[i] << '\n';
    }
    
}
