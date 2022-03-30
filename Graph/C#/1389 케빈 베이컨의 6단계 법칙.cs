using System;
using System.Collections.Generic;
using static System.Console;


class Program
{
    static List<List<int>> graph = new List<List<int>>();
    static int[] relate = new int[101];
    static int[] friend = new int[101];
    static int n, m;
    
    static void bfs(int start) {
        Queue<int> queue = new Queue<int>();
        relate[start] = 0;
        queue.Enqueue(start);
        
        while(queue.Count != 0) {
            int v = queue.Peek(); queue.Dequeue();
            foreach(int to in graph[v]) {
                if(relate[to] == -1) {
                    relate[to] = relate[v]+1;
                    queue.Enqueue(to);
                }
            }
        }
    }
    
    static void Init() {
        Array.Fill(relate, -1, 0, 101);
    }
    
    static void Main() {
        int answer = 0;
        int min_value = 10001;
        string[] s = ReadLine().Split(' ');
        n = int.Parse(s[0]); m = int.Parse(s[1]);
        for(int i = 0 ; i < n+1; i++) {
            graph.Add(new List<int>());
        }
        for(int i = 0 ; i < m; i++) {
            string[] fromto = ReadLine().Split(' ');
            int from = int.Parse(fromto[0]); int to = int.Parse(fromto[1]);
            graph[from].Add(to); graph[to].Add(from);
        }
        
        for(int i = 1; i <= n; i++) {
            Init();
            bfs(i);
            int c = 0;
            for(int j = 1; j <= n; j++) {
                c += relate[j];
            }
            min_value = Math.Min(min_value, c);
            friend[i] = c;
        }
        
        
        answer = Array.IndexOf(friend, min_value);
        Write(answer);
    }
}
