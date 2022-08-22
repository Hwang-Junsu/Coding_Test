import java.util.Scanner;
import java.util.*;




public class Main {
    static int w, h;
    static int[][] map = new int[51][51];
    static boolean[][] visited = new boolean[51][51];
    static int[] dx = {-1, -1, 0, 1, 1, 1, 0, -1};
    static int[] dy = {0, 1, 1, 1, 0, -1, -1, -1};
    
    static boolean BFS(int x, int y) {
        
        if(map[x][y] == 0 || visited[x][y] == true) return false;
        int[] start = {x, y};
        Queue<int[]> queue = new LinkedList<int[]>();
        
        queue.add(start);
        
        while(queue.size() != 0) {
            
            int[] v = queue.poll();
            
            for(int i = 0; i < 8; i++) {
                int nx = dx[i] + v[0];
                int ny = dy[i] + v[1];
                
                if(nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
                
                if(map[nx][ny] == 1 && visited[nx][ny] == false) {
                    int[] index = {nx, ny};
                    queue.add(index);
                    visited[nx][ny] = true;
                }
            }

        }
        
        return true;
    }
    static void init() {
        for(int i = 0 ; i < map.length; i++) {
            Arrays.fill(map[i], 0);
        }
        for(int i = 0 ; i < visited.length; i++) {
            Arrays.fill(visited[i], false);
        }
    }
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int answer = 0;
        while(true) {
            answer = 0;
            w = sc.nextInt(); h = sc.nextInt();
            if(w == 0 && h == 0) break;
            
            for(int i = 0 ; i < h; i++) {
                for(int j = 0; j < w; j++) {
                    int info = sc.nextInt();
                    map[i][j] = info;
                }
            }
            
            
            for(int i = 0 ; i < h; i++) {
                for(int j = 0; j < w; j++) {
                    if(BFS(i,j)) answer += 1;
                }
            }
            System.out.println(answer);
            init();
        }
    }
}
