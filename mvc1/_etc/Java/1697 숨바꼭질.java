import java.util.Scanner;
import java.util.*;

public class Main {
    
    static ArrayList<Integer>[] graph = new ArrayList[200001];
    static int[] visited = new int[200001];
    static int n, k;
    
    
    static void bfs(int start) {
        visited[start] = 1;
        Queue<Integer> queue = new LinkedList();
        queue.add(start);
        
        while(!queue.isEmpty()) {
            int v = queue.peek(); queue.poll();
            for(int to : graph[v]) {
                if(visited[to] == 0){
                    visited[to] = visited[v] + 1;
                    queue.add(to);
                }
            }
        }
        
        
    }
    
    static void init() {
        Arrays.fill(visited, 0);
    }
    
    
    public static void main(String args[]) {
        for(int i = 0 ; i < 200001; i++) {
            graph[i] = new ArrayList();
        }
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt(); k = sc.nextInt();
        
        
        for(int i = 0 ; i < 100001; i++) {
            if(i!=0) graph[i].add(i-1);
            graph[i].add(i+1);
            graph[i].add(i*2);
        }
        bfs(n);
        
        System.out.printf("%d", visited[k]-1);
    }
}
