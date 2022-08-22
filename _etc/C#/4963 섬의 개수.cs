using System;
using static System.Console;
using System.Collections.Generic;

class Program
{
    static int w, h;
    static int[,] board = new int[51,51];
    static bool[,] visited = new bool[51,51];
    static int[] dx = {-1, -1, 0 ,1, 1 ,1, 0, -1};
    static int[] dy = {0, 1, 1, 1, 0, -1, -1, -1};
    
    
    static bool BFS(Tuple<int, int> start) {
        
        if(board[start.Item1, start.Item2] == 0 || visited[start.Item1, start.Item2] == true) return false;
        
        Queue<Tuple<int, int>> queue = new Queue<Tuple<int, int>>();
        queue.Enqueue(start);
        visited[start.Item1,start.Item2] = true;
        
        
        while(queue.Count != 0 ) {
            var v = queue.Dequeue();
            for(int i = 0 ; i < 8; i++) {
                int nx = v.Item1 + dx[i];
                int ny = v.Item2 + dy[i];
                
                
                if(nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
                if(board[nx,ny] == 1 && visited[nx,ny] == false) {
                    visited[nx,ny] = true;
                    queue.Enqueue(new Tuple<int, int>(nx, ny));
                }
                
            }
            
        }
        return true;
    }
    
    static void InitBoard() {
        board = new int[51,51];
        visited = new bool[51,51];
    }
    
    static void Main() {
        while(true) {
            int answer = 0;
            string s = Console.ReadLine();
            string[] sa = s.Split();
            w = int.Parse(sa[0]); h = int.Parse(sa[1]);
            if(w == 0 && h == 0) break;
            
            for(int i = 0 ; i < h; i++) {
                string info = Console.ReadLine();
                string[] infoArr = info.Split(' ');
                for(int j = 0 ; j < w; j++) {
                    board[i,j] = int.Parse(infoArr[j]);
                }
            }
            
            
            for(int i = 0 ; i < h; i++) {
                for (int j = 0 ; j < w; j++) {
                    if(BFS(new Tuple<int,int>(i,j))) answer += 1;
                }
            }
            
            
            Console.WriteLine(answer);
            InitBoard();
        }
    }
}
