import java.util.*;

public class Main {
    
    static ArrayList<Integer> set = new ArrayList<Integer>();
    static StringBuilder sb = new StringBuilder();
    static void Add(int x) {
        if(!set.contains(x)) {
            set.add(x);
        }
    }
    static void Remove(int x) {
        if(set.contains(x)) set.remove(Integer.valueOf(x));
    }
    static void Check(int x) {
        if(set.contains(x)) sb.append("1\n");
        else sb.append("0\n");
    }
    static void Toggle(int x) {
        if(set.contains(x)) set.remove(Integer.valueOf(x));
        else set.add(x);
    }
    static void All() {
        set.clear();
        for(int i = 1; i <= 20; i++) {
            set.add(i);
        }
    }
    static void Empty() {
        set.clear();
    }
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
      
        while(n-- >= 0) {
            String[] order = sc.nextLine().split(" ");
            if(order[0].equals("add")) {
                Add(Integer.parseInt(order[1]));
            }
            else if(order[0].equals("remove")) {
                Remove(Integer.parseInt(order[1]));
            }
            else if(order[0].equals("check")) {
                Check(Integer.parseInt(order[1]));
            }
            else if(order[0].equals("toggle")) {
                Toggle(Integer.parseInt(order[1]));
            }
            else if(order[0].equals("all")) {
                All();
            }
            else if(order[0].equals("empty")) {
                Empty();
            }
        }
        System.out.print(sb);
    }
}
