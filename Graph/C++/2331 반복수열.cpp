#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

bool visited[10000000] = {false};


int calculate(int number, int p) {
    int a = number;
    int result = 0;
    while(a != 0) {
        int temp = 0;
        temp = a%10;
        temp = int(pow(temp, p));
        result += temp;
        a /= 10;
    }
    return result;
}

int main() {
    vector<int> vt;
    int n, p;
    scanf("%d %d", &n, &p);
    
    int checker = -1;
    vt.push_back(n);
    visited[n] = true;
    int back = 0;
    int i = 0;
    while(1) {
        
        if(back == checker) {
            break;
        }
        
        int num = calculate(vt.back(), p);
        if(!visited[num]) {
            visited[num] = true;
            vt.push_back(num);
        }
        else {
            if (checker == -1) {
                checker = num;
            }
            back = vt.back();
            vt.pop_back();
        }
    }
    printf("%d", vt.size());
    
}


// http://boj.kr/7fa23971eeb542388c70ed5f34b26287
