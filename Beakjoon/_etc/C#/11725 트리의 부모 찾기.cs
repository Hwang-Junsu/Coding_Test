using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;


class Program
{
    static List<List<int>> graph = new List<List<int>>();
    static int[] answer = new int[100001];
    static StringBuilder sb = new StringBuilder();
    
    static void dfs(int start) {
        foreach(int to in graph[start]) {
            if(answer[to] == 0) {
                answer[to] = start;
                dfs(to);
            }
            
        }
        
        
    }
    
    static void Main() {
        string s = ReadLine();
        int n = int.Parse(s);
        for(int i = 0; i < n+1; i++) {
            graph.Add(new List<int>());
        }
        
        for(int i = 0 ; i < n-1; i++) {
            string[] fromto= ReadLine().Split(' '); 
            int from = int.Parse(fromto[0]), to = int.Parse(fromto[1]);
            graph[from].Add(to);
            graph[to].Add(from);
        }
        dfs(1);
        for(int i = 2 ; i < n+1; i++) {
            sb.Append(answer[i]);
            sb.Append('\n');
        }
        
        Write(sb.ToString());
        
    }
}
