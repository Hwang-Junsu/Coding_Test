using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;


class Program
{
    static int[,] board = new int[51,51];
    static int[,] visited = new int[51,51];
    static int[] dx = {-1, -1, 0, 1, 1, 1, 0, -1};
    static int[] dy = {0, 1, 1, 1, 0, -1, -1, -1};
    static int n, m;
    
    static int bfs((int, int) start) {
        if(board[start.Item1,start.Item2] == 1) return 0;
        
        int safeDistance = 1;
        Queue<(int,int)> queue = new Queue<(int,int)>();
        queue.Enqueue(start);
        visited[start.Item1, start.Item2] = 1;
        bool danger = false;
        while(queue.Count != 0) {
            
            var v = queue.Peek();
            queue.Dequeue();
            for(int i = 0 ; i < 8; i++) {
                
                int nx = dx[i] + v.Item1;
                int ny = dy[i] + v.Item2;
                
                if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if(visited[nx, ny] > 0) continue;
                if(board[nx, ny] == 1) danger = true;
                visited[nx, ny] = visited[v.Item1, v.Item2] + 1;
                safeDistance = Math.Max(safeDistance, visited[nx, ny]);
                queue.Enqueue((nx, ny));
            }
            if(danger) break;
 
        }
        
        
        return safeDistance-1;
    }
    static void Init() {
        visited = new int[51,51];
    }
    
    static void Main() {
        string[] nm = ReadLine().Split(' ');
        n = int.Parse(nm[0]); m = int.Parse(nm[1]);
        
        for(int i = 0 ; i < n; i++) {
            string[] row = ReadLine().Split(' ');
            for(int j = 0 ; j < m; j++) {
                board[i,j] = int.Parse(row[j]);
            }
        }
        
        int answer = 0;
        for(int i = 0 ; i < n; i++) {
            for(int j = 0 ; j < m; j++) {
                Init();
                answer = Math.Max(answer, bfs((i,j)));
            }
        }
        Write("{0}", answer);
    }
}
