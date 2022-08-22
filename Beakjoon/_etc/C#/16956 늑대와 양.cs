using System;
using System.Text;

class Program
{
    static int r, c;
    static char[][] board = new char[501][];
    static bool danger = false;
    
    static void MakeFence(int x, int y) {
        int[] dx = {-1, 0, 1, 0};
        int[] dy = {0, 1, 0, -1};
        
        for(int i = 0 ; i < 4; i++) {
            
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
            if(board[nx][ny] == '.') board[nx][ny] = 'D';
            if(board[nx][ny] == 'S') danger = true;
        }
        
    }
    
    static void Main() {
        StringBuilder sb = new StringBuilder();
        string s = Console.ReadLine();
        string[] sa = s.Split(' ');
        r = int.Parse(sa[0]);
        c = int.Parse(sa[1]);

        for(int i = 0 ; i < 501; i++) {
            board[i] = new char[501];
        }
        
        for(int i = 0 ; i < r; i++) {
            string s2 = Console.ReadLine();
            for(int j = 0; j < c; j++) {
                board[i][j] = s2[j];
            }
        }
        
        for(int i = 0 ; i < r; i++) {
            for(int j = 0; j < c; j++) {
                if(board[i][j] == 'W') MakeFence(i,j);
            }
        }
        for(int i = 0 ; i < r; i++) {
            for(int j = 0; j < c; j++) {
                sb.Append(board[i][j]);
            }
            sb.Append('\n');
        }        
        
        if(danger) {
            Console.WriteLine(0);
            return ;
        }
        Console.WriteLine(1);
        Console.WriteLine(sb.ToString());
    }
}
