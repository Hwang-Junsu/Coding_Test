import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      int n = s.nextInt();
      
      int[] arr = new int[301];
      int[] dp = new int[301];
      
      for(int i = 1; i <= n; i++) {
          int num = s.nextInt();
          arr[i] = num;
      }
      dp[0] = 0;
      dp[1] = arr[1];
      dp[2] = arr[1] + arr[2];
      
      for(int i = 3; i <= n; i++) {
          dp[i] = Math.max(arr[i] + arr[i-1] + dp[i-3], arr[i] + dp[i-2]);
      }
      System.out.println(dp[n]);
      
    }
}

// http://boj.kr/5a507d1884864bcbae0e6fe50b7884df
