// 분할정복, 재귀

#include <bits/stdc++.h>

using namespace std;

char board[64][64];
string s = "";
int n; char now = '0';
// sw = 0 ew = 8 sh = 0 eh = 8

bool check(int _sh, int _eh, int _sw, int _ew, int size) {
    char start = board[_sh][_sw]; int count = 0;
    for(int i = _sh; i < _eh; i++) {
        for(int j = _sw; j < _ew; j++) {
            if(board[i][j] == start) count++;
        }
    }
    if(count == size*size) return true;
    else return false;
}


void divide(int sh, int eh, int sw, int ew, int size, string& value) {
    
    
    if(check(sh,eh,sw,ew,size)) {
        now = board[sh][sw];
        s += now;
    }
    else {
        int half = size/2;
        if(half == 0) return;
        s += '(';
        divide(sh, eh - half, sw, ew - half, half, value);
        divide(sh, eh - half, sw + half, ew, half, value);
        divide(sh + half, eh, sw, ew - half, half, value);
        divide(sh + half, eh, sw + half, ew, half, value);
        s += ')';
    }
}



int main() {
    cin >> n;
    
    for(int i = 0 ; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> board[i][j];
        }
    }
    
    divide(0, n, 0, n, n, s);
    
    cout << s;
}
