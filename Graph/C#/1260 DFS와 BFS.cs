using System;
using System.Collections.Generic;

class Program
{
    static List<List<int>> graph = new List<List<int>>();
    static bool[] visited = new bool[1001];
    static int n, m, v;
    
    static void DFS(int start) {
        Stack<int> stack = new Stack<int>();
        stack.Push(start);
        Console.Write("{0} ", start);
        visited[start] = true;
        
        while(stack.Count != 0) {
            int v = stack.Peek();
            bool cantmove = false;
            
            foreach(int n in graph[v]) {
                if(visited[n] == false) {
                    visited[n] = true;
                    stack.Push(n);
                    Console.Write("{0} ", n);
                    cantmove = true;
                    break;
                }
            }
            
            if(!cantmove) stack.Pop();
            
        }
    }
    static void BFS(int start) {
        Queue<int> queue = new Queue<int>();
        visited[start] = true;
        queue.Enqueue(start);
        Console.Write("{0} ", start);
        
        while(queue.Count != 0) {
            int v = queue.Dequeue();
            foreach(int n in graph[v]) {
                if(visited[n] == false) {
                    visited[n] = true;
                    queue.Enqueue(n);
                    Console.Write("{0} ", n);
                }
            }
        }
    }
    
    
    static void Main() {
        string s = Console.ReadLine();
        string[] sa = s.Split(' ');
        n = int.Parse(sa[0]); m = int.Parse(sa[1]); v = int.Parse(sa[2]);
        for(int i = 0 ; i < n+1; i++) {
            graph.Add(new List<int>());
        }
        for(int i = 0 ; i < m; i++) {
            string sm = Console.ReadLine();
            string[] sma = sm.Split(' ');
            int start = int.Parse(sma[0]);
            int end = int.Parse(sma[1]);
            
            graph[start].Add(end);
            graph[end].Add(start);
        }
        
        foreach(var info in graph) info.Sort();
        
        DFS(v);
        Array.Fill<bool>(visited, false);
        Console.WriteLine();
        BFS(v);
    }
}
