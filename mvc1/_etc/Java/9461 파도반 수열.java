
import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      int n = s.nextInt();
      long[] dp = new long[101];
      
      dp[0] = 0;
      dp[1] = 1;
      dp[2] = 1;
      dp[3] = 1;
      dp[4] = 2;
      dp[5] = 2;
      
      for(int i = 6; i < 101; i++) {
          dp[i] = dp[i-1] + dp[i-5];
      }
      
      for(int i = 0; i < n; i++) {
          
          int num = s.nextInt();
          System.out.println(dp[num]);
          
      }
      
    }
}
// http://boj.kr/65c0f959215f4e6a9e216b38b6612236
