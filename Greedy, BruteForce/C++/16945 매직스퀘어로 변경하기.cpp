#include <bits/stdc++.h>

using namespace std;

bool check(int (*arr)[3]) {
    int num = 15;
    if(arr[0][0] + arr[0][1] + arr[0][2] != num) return false;
    if(arr[1][0] + arr[1][1] + arr[1][2] != num) return false;
    if(arr[2][0] + arr[2][1] + arr[2][2] != num) return false;
    if(arr[0][0] + arr[1][0] + arr[2][0] != num) return false;
    if(arr[0][1] + arr[1][1] + arr[2][1] != num) return false;
    if(arr[0][2] + arr[1][2] + arr[2][2] != num) return false;
    if(arr[0][0] + arr[1][1] + arr[2][2] != num) return false;
    if(arr[0][2] + arr[1][1] + arr[2][0] != num) return false;
    return true;
}

int main() {
    int magic[3][3];
    int arr[3][3];
    int min_value = 10000;
    int sum = 0;
    vector<int> number = {1,2,3,4,5,6,7,8,9};
    
    for(int i = 0; i <3;  i++) {
        for(int j = 0; j <3 ;j++) {
            cin >> magic[i][j];
        }
    }
    do {
        int index = 0;
        for(int i = 0 ; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                arr[i][j] = number[index++];
            }
        }
        if(check(arr) == true) {
            sum = 0;
            for(int i = 0 ; i < 3; i++) {
                for(int j = 0; j < 3; j++) {
                    sum += abs(arr[i][j] - magic[i][j]);
                }
            }
            min_value = min(min_value, sum);
            
        }
    } while(next_permutation(number.begin(), number.end()));
    
    cout << min_value;
}
