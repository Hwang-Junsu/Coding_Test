#include <bits/stdc++.h>

using namespace std;

int board[1025][1025];

int main() {
    
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n,m; cin >> n >> m;
    
    for(int i = 0 ; i < n; i++) {
        int row = 0;
        for(int j = 0 ; j < n; j++) {
            int temp; cin >> temp;
            row += temp;
            board[i][j] = row;
        }
    }
    
    while(m-- > 0) {
        
        int x1,y1,x2,y2; cin >> x1 >> y1 >> x2 >> y2;
        x1--; y1--; x2--; y2--;
        int sum = 0;
        for(int i = x1; i <= x2; i++) {
            sum += board[i][y2] - board[i][y1-1];
        }
        
        
        cout << sum << '\n';
    }
    
}
