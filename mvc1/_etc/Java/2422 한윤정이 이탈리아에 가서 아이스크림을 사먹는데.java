import java.util.*;

public class Main {
    
    static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();

    static void Swap(int[] arr) {
         int temp = 0;
         temp = arr[0];
         arr[0] = arr[1];
         arr[1] = temp;
    }

    static boolean Next_Permutation(int[] arr, int end) {
        int i = end-1;
        int[] temp = new int[2];
        while(i > 0 && arr[i] <= arr[i-1]) --i;
            
        if(i == 0) return false;
            
        int j = end-1;
        while(arr[i-1] >= arr[j]) j -= 1;
        temp[0] = arr[i-1]; temp[1] = arr[j];
        Swap(temp);
        arr[i-1] = temp[0]; arr[j] = temp[1];
        j = end-1;
        while(i < j) {
            temp[0] = arr[i]; temp[1] = arr[j];
            Swap(temp);
            arr[i] = temp[0]; arr[j] = temp[1];
            i += 1; j-= 1;
        }
        return true;
    }
    
    static boolean dfs(int v, int w) {
        
        for(int to : graph.get(v)) {
            if(to == w) return false;
        }
        return true;
    }
    
    public static void main(String args[]) {
        for(int i = 0 ; i < 201; i++) graph.add(new ArrayList<Integer>());
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); int m = sc.nextInt();
        ArrayList<Integer> ice = new ArrayList<Integer> ();
        int[] index = new int[n];
        for(int i = 0; i < n; i++) ice.add(i+1);
        for(int i = 0 ; i < n-3; i++) index[i] = 0;
        for(int i = n-3 ; i < n; i++) index[i] = 1;
        
        for(int i = 0; i < m; i++) {
            int from = sc.nextInt(); int to = sc.nextInt();
            graph.get(from).add(to); graph.get(to).add(from);
        }
        
        int answer = 0;
        do {
            ArrayList<Integer> combi = new ArrayList<Integer> ();
            for(int i = 0 ; i < n; i++) {
                if (index[i] == 1) combi.add(ice.get(i));     
            }
            boolean can = true;
            for(int i = 0 ; i < 3; i++) {
                for(int j = i+1 ; j < 3; j++) {
                    
                    if(!dfs(combi.get(i), combi.get(j))) {
                        can = false; break;
                    }
                    
                }
                if(!can) break;
            }
            
            if(can) {
                answer++;
            }
        } while(Next_Permutation(index, n));
        
        System.out.println(answer);
    }
}
