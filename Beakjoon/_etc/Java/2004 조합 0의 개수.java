import java.util.*;

public class Main {
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        long answer = 0;
        long n = sc.nextLong(); long m = sc.nextLong();
        long tc = 0; long fc = 0;
        long num = 2;
        
        while(num <= n) {
            tc += (n/num);
            num *= 2;
        }
        num = 2;
        while(num <= (n-m)) {
            tc -= ((n-m)/num);
            num *= 2;
        }
        num = 2;
        while(num <= m) {
            tc -= (m / num);
            num *= 2;
        }
        num = 5;
        while(num <= n) {
            fc += (n/num);
            num *= 5;
        }
        num = 5;
        while(num <= (n-m)) {
            fc -= ((n-m)/num);
            num *= 5;
        }
        num = 5;
        while(num <= m) {
            fc -= (m/num);
            num *= 5;
        }
    answer = Math.min(tc, fc);
    System.out.println(answer);
    }
}
