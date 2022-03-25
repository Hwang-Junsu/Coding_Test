import java.util.Scanner;
import java.util.*;


public class Main {
    static int w,h;
    static char[][] board = new char[501][501];
    static boolean danger = false;
    
    static void makeFence(int x, int y) {
        int[] dx = {-1, 0, 1, 0};
        int[] dy = {0, 1, 0, -1};
        
        for(int i = 0 ; i < 4; i++) {
            int nx = dx[i] + x; int ny = dy[i] + y;
            
            if(nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
            if(board[nx][ny] == '.') board[nx][ny] = 'D';
            if(board[nx][ny] == 'S') {
                danger = true;
                return;
            }
            
        }
        
        
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        h = sc.nextInt();
        w = sc.nextInt();
        for(int i = 0 ; i < h; i++) {
            String s = sc.next();
            for(int j = 0 ; j < w; j++) {
                char ch = s.charAt(j);
                board[i][j] = ch;
            }
        }
        
        for(int i = 0 ; i < h; i++) {
            for(int j = 0 ; j< w; j++) {
                if(board[i][j] == 'W') makeFence(i,j);
                
                if(danger) break;
            }
        }
        
        
        if(danger) {
            System.out.println(0);
            return;
        }
        
        System.out.println(1);
        for(int i = 0 ; i < h; i++) {
            for(int j = 0 ; j < w; j++) {
                System.out.printf("%c", board[i][j]);
            }
            System.out.println();
        }

    }
}
