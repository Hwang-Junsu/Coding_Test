#include <bits/stdc++.h>

using namespace std;

int board[501][501];
int n,m;

int shapeO(int x, int y) {
    if(x+1 >= n || y+1 >= m) return -1;
    int result = 0;
    result = board[x][y] + board[x+1][y+1] + board[x+1][y] + board[x][y+1];
    return result;
}

int shapeI(int x, int y, int r) {
    int result = 0;
    if(r == 0) {
        if(y+1 >= m || y+2 >= m || y+3 >= m) return -1;
        result = board[x][y] + board[x][y+1] + board[x][y+2] + board[x][y+3];
    }
    else {
        if(x+1 >= n || x+2 >= n || x+3 >= n) return -1;
        result = board[x][y] + board[x+1][y] + board[x+2][y] + board[x+3][y];
    }
    return result;
}

int shapeL(int x, int y, int r) {
    int result = 0;
    if(r == 0) {
        if(x+1 >= n || x+2 >= n || y+1 >= m) return -1;
        result = board[x][y] + board[x+1][y] + board[x+2][y] + board[x+2][y+1];
    }
    else if(r == 1) {
        if(y+1 >= m || y+2 >= m || x+1 >= n) return -1;
        result = board[x][y] + board[x][y+1] + board[x][y+2] + board[x+1][y+2];        
    }
    else if(r == 2) {
        if(y+1 >= m || x-1 < 0 || y+2 >= m) return -1;
        result = board[x][y] + board[x][y+1] + board[x][y+2] + board[x-1][y+2];        
    }
    else if(r == 3){
        if(x+1 >= n || x+2 >= n || y-1 < 0) return -1;
        result = board[x][y] + board[x+1][y] + board[x+2][y] + board[x+2][y-1];       
    }
    else if(r == 4){
        if(x+1 >= n || x+2 >= n || y+1 >= m) return -1;
        result = board[x][y] + board[x+1][y] + board[x+2][y] + board[x][y+1];       
    }
    else if(r == 5){
        if(x+1 >= n || x+2 >= n || y-1 < 0) return -1;
        result = board[x][y] + board[x+1][y] + board[x+2][y] + board[x][y-1];       
    }
    else if(r == 6){
        if(x+1 >= n || y+2 >= m || y+1 >= m) return -1;
        result = board[x][y] + board[x+1][y] + board[x+1][y+1] + board[x+1][y+2];       
    }
    else if(r == 7){
        if(y+1 >= m || y+2 >= m || x+1 >= n) return -1;
        result = board[x][y] + board[x][y+1] + board[x][y+2] + board[x+1][y];         
    }
    return result;
}

int shapeS(int x, int y, int r) {
    int result = 0;
    if(r == 0) {
        if(y+1 >= m || x+1 >= n || x+2 >= n) return -1;
        result = board[x][y] + board[x+1][y] + board[x+1][y+1] + board[x+2][y+1];
    }
    else if(r == 1) {
        if(y+1 >= m || x-1 < 0 || y+2 >= m) return -1;
        result = board[x][y] + board[x][y+1] + board[x-1][y+1] + board[x-1][y+2];        
    }
    else if(r == 2) {
        if(y-1 < 0 || x+1 >= n || x+2 >= n) return -1;
        result = board[x][y] + board[x+1][y] + board[x+1][y-1] + board[x+2][y-1];        
    }
    else {
        if(y+1 >= m || x+1 >= n || y+2 >= m) return -1;
        result = board[x][y] + board[x][y+1] + board[x+1][y+1] + board[x+1][y+2];        
        
    }
    return result;
}

int shapeT(int x, int y, int r) {
    int result = 0;
    if(r == 0) {
        if(x+1 >= n || x+2 >= n || y+1 >= m) return -1;
        result = board[x][y] + board[x+1][y] + board[x+2][y] + board[x+1][y+1];
    }
    else if(r == 1) {
        if(x+1 >= n || y+2 >= m || y+1 >= m) return -1;
        result = board[x][y] + board[x][y+1] + board[x][y+2] + board[x+1][y+1];        
    }
    else if(r == 2) {
        if(x+1 >= n || x+2 >= n || y-1 < 0) return -1;
        result = board[x][y] + board[x+1][y] + board[x+2][y] + board[x+1][y-1];        
    }
    else {
        if(x-1 < 0 || y+1 >= m || y+2 >= m) return -1;
        result = board[x][y] + board[x][y+1] + board[x][y+2] + board[x-1][y+1];    
    }
    return result;
}

int main() {
    cin >> n >> m;
    
    for(int i = 0 ; i < n; i++) {
        for(int j = 0; j < m; j++) {
            cin >> board[i][j];
        }
    }
    int v = 0;
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < m; j++) {
            v = max(v, shapeO(i,j));
        }
    }
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < m; j++) {
            for(int k = 0 ; k < 2; k++) {
                v = max(v, shapeI(i,j,k));
            }
        }
    }
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < m; j++) {
            for(int k = 0 ; k < 4; k++) {
                v = max(v, shapeS(i,j,k));
            }
        }
    }
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < m; j++) {
            for(int k = 0 ; k < 4; k++) {
                v = max(v, shapeT(i,j,k));
            }
        }
    }
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < m; j++) {
            for(int k = 0 ; k < 8; k++) {
                v = max(v, shapeL(i,j,k));
            }
        }
    }
    cout << v << '\n';
    
}
