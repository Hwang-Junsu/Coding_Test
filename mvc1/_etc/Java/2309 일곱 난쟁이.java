import java.util.*;

public class Main {
    public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      int[] hei = new int[9];
      for(int i = 0; i < 9; i++) hei[i] = sc.nextInt();
      Arrays.sort(hei);
      int sum = 0; int lier1 = 0; int lier2 = 0;
      for(int i = 0 ; i < 9; i++) {
          for(int j = i+1; j < 9; j++) {
              sum = Arrays.stream(hei).sum() - hei[i] - hei[j];
              if(sum == 100) {
                  lier1 = i; lier2 = j; break;
              }
          }
      }
      for(int i = 0 ; i < 9; i++) {
          if(i == lier1 || i == lier2) continue;
          System.out.println(hei[i]);
      }
    }
}
