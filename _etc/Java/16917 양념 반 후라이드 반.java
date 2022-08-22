import java.util.*;

public class Main {
    public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      int a = sc.nextInt(); int b = sc.nextInt(); int c = sc.nextInt();
      int x = sc.nextInt(); int y = sc.nextInt(); int price = 0;
      if(a + b > 2*c) {
          if(x >= y) price = c*2*y + (x-y)*a;
          else price = c*2*x + (y-x)*b;
      }
      else price = a*x + b*y;
      price = Math.min(price, Math.max(x,y) * c * 2);
      System.out.println(price);
    }
}
