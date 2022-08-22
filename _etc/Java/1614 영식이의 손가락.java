import java.util.*;

public class Main {
    
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        long answer = 0;
        long h = sc.nextLong(); long c = sc.nextLong();
        
        if(h%2 == 0) {
            if(h == 2) {
                if(c%2 == 1) {
                    answer += (2*((c+1)/2));
                    answer += (6*((c+1)/2));
                    answer -= 1;
                }
                else {
                    answer += (2*(c/2));
                    answer += (6*(c/2));
                    answer += 1;
                }
            }
            else {
                answer += 4;
                if(c%2 == 0) {
                    answer += (2*(c/2));
                    answer += (6*(c/2));
                    answer -= 1;
                }
                else {
                    answer += 2 *((c+1)/2);
                    answer += 6 *(((c+1)/2)-1);
                    answer -= 1;
                }
            }
        }
        else {
            answer += (h-1);
            if(h==3) answer += (c*4);
            else answer += (c*8);
        }
        System.out.println(answer);
    }
}
