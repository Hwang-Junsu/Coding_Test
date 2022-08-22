import java.util.Scanner;
import java.util.*;


public class Main {
    static int a,p;
    
    static int cal(int num) {
        int result = 0;
        int temp = 0;
        while(num != 0) {
            temp = num%10;
            temp = (int)Math.pow(temp, p);
            result += temp;
            num /= 10;
        }
        
        return result;
    }
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        a = sc.nextInt();
        p = sc.nextInt();
        ArrayList<Integer> arr = new ArrayList<Integer>();
        int check = -1;
        arr.add(a);
        
        while(true) {
            int v = cal(arr.get(arr.size()-1));
            
            if(arr.contains(v)) {
                check = v;
                break;
            }
            arr.add(v);
        }
        
        
        
        System.out.printf("%d", arr.indexOf(check));
    }
}
