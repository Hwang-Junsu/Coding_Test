using System;
using static System.Console;
using System.Collections;
using System.Collections.Generic;

class Program
{
    
    static void Swap(ref int x, ref int y) {
        int temp = 0;
        temp = x;
        x = y;
        y = temp;
    }
    
    
    static bool Next_Permutation(int[] arr, int end) {
        
        int i = end-1;
        while(i > 0 && arr[i] <= arr[i-1]) --i;
        
        if(i == 0) return false;
        
        int j = end-1;
        while(arr[i-1] >= arr[j]) j -= 1;
        Swap(ref arr[i-1], ref arr[j]);
        j = end-1;
        while(i < j) {
            Swap(ref arr[i], ref arr[j]);
            i += 1; j-= 1;
        }
        return true;
    }
    
    static bool dfs(int v, int worst) {
        foreach(int to in graph[v]) {
            if(to == worst) return false;
        }
        return true;
    }
    
    static ArrayList[] graph = new ArrayList[201];
    static void Main() {
        for(int i = 0 ; i < graph.Length; i++) graph[i] = new ArrayList();
        string[] s = ReadLine().Split(' ');
        int n = int.Parse(s[0]); int m = int.Parse(s[1]);
        int[] ice = new int[n];
        int[] index = new int[n];
        for(int i = n-3; i < n; i++) index[i] = 1;
        while(m-- > 0) {
            string[] a = ReadLine().Split(' ');
            int com1 = int.Parse(a[0]); int com2 = int.Parse(a[1]);
            graph[com1].Add(com2);
            graph[com2].Add(com1);
        }
        for(int i = 0 ; i < n; i++) ice[i] = i+1;
        int count = 0;
        do {
            List<int> combi = new List<int>();
            for(int i = 0 ; i < n; i++) {
                if(index[i] == 1) combi.Add(ice[i]);
            }

            bool can = true;
            for(int i = 0; i < combi.Count; i++) {
                for(int j = i+1; j < combi.Count; j++) {
                    if(!dfs(combi[i], combi[j])) {
                        can = false;
                    }
                }
                if(!can) break;
            }
            if(can) count++;
            
            
        } while(Next_Permutation(index, n));
        WriteLine(count);
    }
}
