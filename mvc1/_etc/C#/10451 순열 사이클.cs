using System;
using System.Collections.Generic;

class Program
{
    static List<List<int>> graph = new List<List<int>>();
    static bool[] visited = new bool[1001];
    static int n;
    
    
    static bool BFS(int start) {
        if(visited[start]) return false;
        
        Queue<int> queue = new Queue<int>();
        
        queue.Enqueue(start);
        visited[start] = true;
        while(queue.Count != 0 ) {
            
            int v = queue.Dequeue();
            foreach(int n in graph[v]) {
                if(visited[n] == false) {
                    visited[n] = true;
                    queue.Enqueue(n);
                }
            }
        }
        return true;
    }
    
    static void Main() {
        string s = Console.ReadLine();
        int t = int.Parse(s);
        
        for(int x = 0 ; x < t ; x++) {
            int answer = 0;
            string ns = Console.ReadLine();
            string sarr = Console.ReadLine();
            n = int.Parse(ns);
            string[] sar = sarr.Split(' ');
            
            for(int i = 0 ; i < n+1 ; i++) {
                graph.Add(new List<int>());
            }
            for(int i = 1; i < n+1; i++) {
                graph[i].Add(int.Parse(sar[i-1]));
                graph[int.Parse(sar[i-1])].Add(i);
            }
            
            
            for(int i = 1 ; i < n+1; i++) {
                if(BFS(i)) answer += 1;
            }
            
            Array.Fill(visited, false);
            foreach(var lst in graph) {
                lst.Clear();
            }
            Console.WriteLine(answer);
        }
    }
}
