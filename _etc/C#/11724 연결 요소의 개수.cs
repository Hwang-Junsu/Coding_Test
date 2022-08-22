using System;
using static System.Console;
using System.Collections.Generic;

class Program
{
    static List<List<int>> graph = new List<List<int>>();
    static bool[] visited = new bool[1001];
    
    static bool bfs(int start) {
        if(visited[start] == true) return false;
        Queue<int> queue = new Queue<int>();
        visited[start] = true;
        queue.Enqueue(start);
        
        while(queue.Count != 0) {
            int v = queue.Peek(); queue.Dequeue();
            
            foreach(int to in graph[v]) {
                if(visited[to] == false) {
                    visited[to] = true;
                    queue.Enqueue(to);
                }
            }
        }
        return true;
    }
    
    static void Main() {
        int answer = 0;
        string[] s = ReadLine().Split(' '); int n = int.Parse(s[0]); int m = int.Parse(s[1]);
        for(int i = 0 ; i < n+1; i++) {
            graph.Add(new List<int>());
        }
        for(int i = 0 ; i < m; i++) {
            string[] s2 = ReadLine().Split(' '); int u = int.Parse(s2[0]); int v = int.Parse(s2[1]);
            graph[u].Add(v); graph[v].Add(u);
        }
        
        for(int i = 1; i < n+1; i++) {
            if(bfs(i)) answer += 1;
        }
        
        
        Write(answer);
    }
}
