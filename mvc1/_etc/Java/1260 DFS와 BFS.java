import java.util.Scanner;
import java.util.*;


public class Main {
    static int n,m,v;
    static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();
    static boolean[] visited = new boolean[1001];

    static void DFS(int start) {
        Stack<Integer> stack = new Stack<>();
        visited[start] = true;
        stack.push(start);
        System.out.printf("%d ", start);
        
        while(!stack.empty()) {
            int v = stack.peek();
            boolean cantmove = false;
            for(int n : graph.get(v)) {
                if(!visited[n]) {
                    stack.push(n);
                    visited[n] = true;
                    System.out.printf("%d ", n);
                    cantmove = true;
                    break;
                }
            }
            if(!cantmove) stack.pop();
        }
    }
    static void BFS(int start) {
        Queue<Integer> queue = new LinkedList<>();
        visited[start] = true;
        queue.add(start);
        System.out.printf("%d ", start);
        
        while(queue.size() != 0) {
            int v = queue.poll();
            for(int n : graph.get(v)) {
                if(!visited[n]) {
                    queue.add(n);
                    visited[n] = true;
                    System.out.printf("%d ", n);
                }
            }
        }
    }
    static void init() {
        Arrays.fill(visited, false);
    }
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt(); m = sc.nextInt(); v = sc.nextInt();

        for(int i = 0 ; i < n+1; i++) {
            graph.add(new ArrayList<Integer>());
        }
        for(int i = 0 ; i < m; i++) {
            int from = sc.nextInt(), to = sc.nextInt();
            graph.get(from).add(to);
            graph.get(to).add(from);
        }
        for(int i = 0 ; i < graph.size(); i++) {
            Collections.sort(graph.get(i));
        }
        
        DFS(v);
        System.out.println();
        init();
        BFS(v);
    }
}
