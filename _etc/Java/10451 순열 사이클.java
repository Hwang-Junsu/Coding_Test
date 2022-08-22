import java.util.Scanner;
import java.util.*;


public class Main {
    static int N;
    static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();
    static boolean[] visited = new boolean[1001];

    static boolean BFS(int start) {
        
        if(visited[start] == true) return false;
        
        Queue<Integer> queue = new LinkedList<>();
        visited[start] = true;
        queue.add(start);
        
        while(queue.size() != 0) {
            int v = queue.poll();
            for(int n : graph.get(v)) {
                if(!visited[n]) {
                    queue.add(n);
                    visited[n] = true;
                }
            }
        }
        return true;
    }
    static void init() {
        for(int i = 0 ; i < graph.size(); i++) {
            graph.get(i).clear();
        }
        Arrays.fill(visited, false);
    }
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        
        int t = sc.nextInt();
        
        for(int x = 0 ; x < t; x++) {
            N = sc.nextInt();
            int answer = 0;
            for(int i = 0 ; i < N+1; i++) {
                graph.add(new ArrayList<Integer>());
            }
            for(int from = 1 ; from < N+1; from++) {
                int to = sc.nextInt();
                graph.get(from).add(to);
                graph.get(to).add(from);
            }
            
            
            for(int i = 1; i < N+1; i++) {
                if(BFS(i)) answer += 1;
            }
            System.out.println(answer);
            init();
        }
    }
}
