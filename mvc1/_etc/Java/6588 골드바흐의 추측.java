import java.util.*;
import java.io.*;

public class Main {
    
    public static boolean isPrime(int number) {
        if(number == 1) return false;
        if (number % 2 == 0) return false;
        for(int i = 3; i <= (int)Math.pow(number, 0.5); i+=2) {
            if(number % i == 0) return false;
        }
        return true;
    }
    
    public static void main(String args[]) {
        StringBuilder sb = new StringBuilder();
        Scanner sc = new Scanner(System.in);
        
        while(true) {
            int n = sc.nextInt();
            if(n == 0) break;
            
            int j = n;
            for(int i = 1; i < n; i++) {
                j = n-i;
                if(isPrime(i) && isPrime(j)) {
                    sb.append(String.format("%d = %d + %d\n", i+j, i, j));
                    break;
                }
            }
            if(j == 0) sb.append("Goldbach's conjecture is wrong.");
        }
        System.out.println(sb);
    }
}
