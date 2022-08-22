import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      int n = s.nextInt();
      int[] dp = new int[12];
      
      dp[0] = 0;
      dp[1] = 1;
      dp[2] = 2;
      dp[3] = 4;
      
      for(int i = 4; i < 12; i++) {
          dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
      }
      
      for(int i = 0; i < n; i++) {
          
          int num = s.nextInt();
          System.out.println(dp[num]);
          
      }
      
    }
}

// http://boj.kr/2dc063c00d4c43f8a8093ec5740492fa
