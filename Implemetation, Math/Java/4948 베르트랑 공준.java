import java.util.*;

public class Main {
    
    public static boolean isPrime(int number) {
        if (number % 2 == 0) return false;
        for(int i = 3; i <= (int)Math.pow(number, 0.5); i+=2) {
            if(number % i == 0) return false;
        }
        return true;
    }
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        
        while(true) {
            int n = sc.nextInt();
            if(n == 1) {
                System.out.println(1); continue;
            }
            if(n == 0) break;
            int count = 0;
            for(int i = n+1; i <= 2*n; i++) {if(isPrime(i)) count++;}
            
            System.out.println(count);
        }

    }
}
