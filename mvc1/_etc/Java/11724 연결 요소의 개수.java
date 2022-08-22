import java.util.Scanner;
import java.util.*;

public class Main {
    
    static ArrayList<Integer>[] graph = new ArrayList[1001];
    static boolean[] visited = new boolean[1001];
    
    static boolean bfs(int start) {
        if(visited[start] == true) return false;
        Queue<Integer> queue = new LinkedList();
        visited[start] = true;
        queue.add(start);
        
        while(!queue.isEmpty()) {
            int v = queue.peek(); queue.poll();
            for(int to : graph[v]) {
                if(visited[to] == false) {
                    visited[to] = true;
                    queue.add(to);
                }
            }
        }
        
        return true;
        
    }
    
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        for(int i = 0 ; i < 1001; i++) graph[i] = new ArrayList ();
        int n = sc.nextInt(), m = sc.nextInt();
        for(int i = 0 ; i < m; i++) {
            int from = sc.nextInt(), to = sc.nextInt();
            graph[from].add(to); graph[to].add(from);
        }
        int answer = 0;
        for(int i = 1; i < n+1; i++) {
            if(bfs(i)) answer += 1;
        }
        
        System.out.print(answer);
        
    }
}
