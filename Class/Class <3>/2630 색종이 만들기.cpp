// 재귀, 분할정복

#include <bits/stdc++.h>

using namespace std;

int board[128][128];
int white = 0; int blue = 0;
int n;

bool check(int _sh, int _eh, int _sw, int _ew, int color, int size) {
    int count = 0;
    for(int i = _sh; i < _eh; i++) {
        for(int j = _sw; j < _ew; j++) {
            if(board[i][j] == color) count++;
        }
    }
    if(count == size) return true;
    else return false;
}

void divide(int sh, int eh, int sw, int ew, int color, int size, int& value) {
    if(sh > eh || sw > ew) return;
    
    int area = size * size;
    if(check(sh,eh,sw,ew,color,area)) {
        value++; return;
    }
    
    int half = size/2;
    if(half == 0) return;
    
    divide(sh, eh - half, sw, ew - half, color, half, value);
    divide(sh + half, eh, sw + half, ew, color, half, value);
    divide(sh, eh - half, sw + half, ew, color, half, value);
    divide(sh + half, eh, sw, ew - half, color, half, value);
    
    
}



int main() {
    cin >> n;
    
    for(int i = 0 ; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> board[i][j];
        }
    }
    
    divide(0, n, 0, n, 0, n, white);
    divide(0, n, 0, n, 1, n, blue);
    
    cout << white << '\n' << blue;
}
