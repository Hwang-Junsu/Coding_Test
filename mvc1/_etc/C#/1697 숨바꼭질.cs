using System;
using System.Collections.Generic;
using static System.Console;


class Program
{
    static List<List<int>> graph = new List<List<int>>();
    static int[] visited = new int[200001];
    static int n, k;
    
    static void bfs(int start) {
        Queue<int> queue = new Queue<int>();
        visited[start] = 0;
        queue.Enqueue(start);
        
        while(queue.Count != 0) {
            int v = queue.Peek(); queue.Dequeue();
            foreach(int to in graph[v]) {
                if(visited[to] == -1) {
                    visited[to] = visited[v]+1;
                    queue.Enqueue(to);
                }
            }
        }
    }
    
    static void Init() {
        Array.Fill(visited, -1, 0, 200001);
    }
    
    static void Main() {
        string[] s = ReadLine().Split(' ');
        n = int.Parse(s[0]); k = int.Parse(s[1]);
        for(int i = 0 ; i < 200001; i++) {
            graph.Add(new List<int>());
        }
        for(int i = 0 ; i < 100001; i++) {
            
            if(i != 0) graph[i].Add(i-1);
            graph[i].Add(i+1);
            graph[i].Add(i*2);
        }
        Init();

        bfs(n);

        Write(visited[k]);
    }
}
