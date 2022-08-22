import java.util.Scanner;
import java.util.*;

public class Main {
    
    static ArrayList<Integer>[] graph = new ArrayList[100001];
    static int[] parant = new int[100001];
    
    static void dfs(int v) {
        for(int to : graph[v]) {
            if(parant[to] == 0) {
                parant[to] = v;
                dfs(to);
            }
        }
    }
    
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        for(int i = 0 ; i < 100001; i++) graph[i] = new ArrayList ();
        int n = sc.nextInt();
        for(int i = 0 ; i < n-1; i++) {
            int from = sc.nextInt(), to = sc.nextInt();
            graph[from].add(to); graph[to].add(from);
        }
        dfs(1);
        for(int i = 2; i < n+1; i++) System.out.println(parant[i]);
    }
}
