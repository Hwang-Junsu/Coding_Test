#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cin >> n;
    int d = int(log10(float(n))+1);
    long long answer = 0;
    int temp = n;
    int firstDigit = 0;
    int elseDigit = 0;
    while(temp >= 10) {
        temp /= 10;
    }
    firstDigit = temp;
    elseDigit = n % int(pow(10,d-1));
    int value = 0;
    for(int i = 0 ; i < d; i++) {
        if(i==0) continue;
        else {
            value += (i * int(pow(10, i-1))) * 9;
        }
    }
    
    answer = value + ((d*int(pow(10,d-1))) * (firstDigit-1)) + ((elseDigit+1) * d);
    
    cout << answer;
}
