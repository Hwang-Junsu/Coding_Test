#include <bits/stdc++.h>

using namespace std;

int paper[2188][2188];
int mone = 0; int zero = 0; int one = 0;
int n;


bool check(int _sr, int _sc, int _er, int _ec) {
    int value = paper[_sr][_sc];
    for(int i = _sr; i < _er; i++) {
        for(int j = _sc; j < _ec; j++) {
            if(value != paper[i][j]) return false;
        }
    }
    return true;
}

void divide(int size, int _sr, int _sc, int _er, int _ec) {
    if(size == 0) return;
    if(check(_sr, _sc, _er, _ec)) {
        int* p;
        if(paper[_sr][_sc] == 1) {p = &one;}
        else if(paper[_sr][_sc] == -1) {p = &mone;}
        else {p = &zero;}
        (*p)++;
        return;
    }
    int d = (size/3) * 2; int t = (size/3);
    divide(size/3, _sr, _sc, _er-d, _ec-d);
    divide(size/3, _sr, _sc+t, _er-d, _ec-t);
    divide(size/3, _sr, _sc+d, _er-d, _ec);
    divide(size/3, _sr+t, _sc, _er-t, _ec-d);
    divide(size/3, _sr+t, _sc+t, _er-t, _ec-t);
    divide(size/3, _sr+t, _sc+d, _er-t, _ec);
    divide(size/3, _sr+d, _sc, _er, _ec-d);
    divide(size/3, _sr+d, _sc+t, _er, _ec-t);
    divide(size/3, _sr+d, _sc+d, _er, _ec);
    
}


int main() {
    cin >> n;
    
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < n; j++) {
            cin >> paper[i][j];
        }
    }
    divide(n, 0,0,n,n);
    
    cout << mone << " " << zero << " " << one;
    
}
