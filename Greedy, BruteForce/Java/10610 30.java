import java.util.*;
import java.util.Arrays;

public class Main {
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String num = sc.nextLine();
        String[] arr = num.split("");
        Arrays.sort(arr, Collections.reverseOrder());
        String snum = String.join("", arr);
        
        int sum = 0;
        if(snum.charAt(snum.length()-1) != '0') System.out.println(-1);
        else {
            for(int i = 0 ; i < snum.length()-1; i++) {
                sum += snum.charAt(i) - '0';
            }
            
            if(sum % 3 == 0) System.out.println(snum);
            else System.out.println(-1);
        }
    }
}
