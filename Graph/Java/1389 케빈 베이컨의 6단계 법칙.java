import java.util.Scanner;
import java.util.*;

public class Main {
    
    static ArrayList<Integer>[] graph = new ArrayList[101];
    static int[] visited = new int[101];
    static int[] answer = new int[101];
    static int n, m;
    
    
    static void bfs(int start) {
        visited[start] = 0;
        Queue<Integer> queue = new LinkedList();
        queue.add(start);
        
        while(!queue.isEmpty()) {
            int v = queue.peek(); queue.poll();
            for(int to : graph[v]) {
                if(visited[to] == -1){
                    visited[to] = visited[v] + 1;
                    queue.add(to);
                }
            }
        }
        
        
    }
    
    static void init() {
        Arrays.fill(visited, -1);
    }
    
    
    public static void main(String args[]) {
        int min_value = 101;
        for(int i = 0 ; i < 101; i++) {
            graph[i] = new ArrayList();
        }
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt(); m = sc.nextInt();
        for(int i = 0 ; i < m; i++) {
            int from = sc.nextInt(); int to = sc.nextInt();
            graph[from].add(to); graph[to].add(from);
        }
        
        
        for(int i = 1; i <= n ; i++) {
            init();
            bfs(i);
            int sum = 0 ;
            for(int j = 1 ; j <= n; j++) {
                sum += visited[j];
            }
            answer[i] = sum;
            min_value = Math.min(sum, min_value);
        }
        for(int i = 0 ; i <=n ; i++) {
            if(answer[i] == min_value) {
                System.out.printf("%d", i);
                break;
            }
        }
    }
}

