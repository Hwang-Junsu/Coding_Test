import java.util.*;

public class Main {
    
    public static int findDigit(int number) {
        int result = 0;
        while(number > 0) {
            number /= 10;
            result += 1;
        }
        return result;
    }
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        long answer = 0;
        int n = sc.nextInt();
        int d = findDigit(n);
        int temp = n; int value = 0;
        while(temp >= 10) {
            temp /= 10;
        }
        int f = temp;
        int e = n % (int)Math.pow(10, d-1);
        for(int i = 1 ; i < d; i++) {
            value += (i * (int)Math.pow(10, i-1)) * 9;
        }
        answer = value + ((d * (int)Math.pow(10, d-1)) * (f-1)) + (e+1)*d;
        System.out.println(answer);
    }
}
