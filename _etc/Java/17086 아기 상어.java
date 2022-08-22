import java.util.Scanner;
import java.util.*;

public class Main {
    
    static int[][] board = new int[51][51];
    static int[][] visited = new int[51][51];
    static int[] dx = {-1, -1, 0, 1, 1, 1, 0, -1};
    static int[] dy = {0, 1, 1, 1, 0, -1, -1, -1};
    static int n, m;
    
    
    static int bfs(int[] start) {
        if(board[start[0]][start[1]] == 1) return 0;
        
        int safeDistance = 0;
        boolean danger = false;
        visited[start[0]][start[1]] = 1;
        Queue<int[]> queue = new LinkedList();
        queue.add(start);
        
        while(!queue.isEmpty()) {
            
            int[] index = queue.peek(); queue.poll();
            for(int i = 0 ; i < 8; i++) {
                
                int nx = index[0] + dx[i]; int ny = index[1] + dy[i];
                if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if(nx == start[0] && ny == start[1]) continue;
                
                if(board[nx][ny] == 1) danger = true;
                
                if(visited[nx][ny] < 1) {
                    visited[nx][ny] = visited[index[0]][index[1]] + 1;
                    safeDistance = Math.max(safeDistance, visited[nx][ny]);
                    int[] nidx = {nx, ny};
                    queue.add(nidx);
                }
            }
            
            if(danger) break;
        }
        
        return safeDistance - 1;
    }
    
    static void init() {
        for(int i = 0 ; i < 51; i++) {
            Arrays.fill(visited[i], 0);
        }
    }
    
    static void print() {
        for(int i = 0 ; i < n; i++) {
            for(int j = 0 ; j < m; j++) {
                System.out.printf("%d ", visited[i][j]);
            }
            System.out.println();
        }
        System.out.println();
    }
    
    
    public static void main(String args[]) {
        int max_value = 0;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt(); m = sc.nextInt();
        
        for(int i = 0 ; i < n; i++) {
            for(int j = 0 ; j < m; j++) {
                board[i][j] = sc.nextInt();
            }
        }
        
        for(int i = 0 ; i < n; i++) {
            for(int j = 0; j < m; j++) {
                init();
                int[] idx = {i, j};
                max_value = Math.max(max_value, bfs(idx));
                
            }
        }
        System.out.printf("%d", max_value);
    }
}
