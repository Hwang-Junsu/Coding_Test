import java.util.*;

public class Main {
    static void Swap(int[] arr) {
         int temp = 0;
         temp = arr[0];
         arr[0] = arr[1];
         arr[1] = temp;
    }

    static boolean Next_Permutation(int[] arr, int end) {
        int i = end-1;
        int[] temp = new int[2];
        while(i > 0 && arr[i] <= arr[i-1]) --i;
            
        if(i == 0) return false;
            
        int j = end-1;
        while(arr[i-1] >= arr[j]) j -= 1;
        temp[0] = arr[i-1]; temp[1] = arr[j];
        Swap(temp);
        arr[i-1] = temp[0]; arr[j] = temp[1];
        j = end-1;
        while(i < j) {
            temp[0] = arr[i]; temp[1] = arr[j];
            Swap(temp);
            arr[i] = temp[0]; arr[j] = temp[1];
            i += 1; j-= 1;
        }
        return true;
    }
    
    static boolean Check(int[][] arr) {
        if(arr[0][0] + arr[1][0] + arr[2][0] != 15) return false;
        if(arr[0][1] + arr[1][1] + arr[2][1] != 15) return false;
        if(arr[0][2] + arr[1][2] + arr[2][2] != 15) return false;
        if(arr[0][0] + arr[0][1] + arr[0][2] != 15) return false;
        if(arr[1][0] + arr[1][1] + arr[1][2] != 15) return false;
        if(arr[2][0] + arr[2][1] + arr[2][2] != 15) return false;
        if(arr[0][0] + arr[1][1] + arr[2][2] != 15) return false;
        if(arr[0][2] + arr[1][1] + arr[2][0] != 15) return false;
        return true;
    }
    public static void main(String args[]) {
        int[][] board = new int[3][3];
        int[] number = {1,2,3,4,5,6,7,8,9}; int min = 100000;
        Scanner sc = new Scanner(System.in);
        for(int i = 0 ; i < 3; i++) {
            for(int j = 0 ; j < 3; j++) {
                board[i][j] = sc.nextInt();
            }
        }
        
        do {
            int[][] magic = new int[3][3]; int index = 0;
            for(int i = 0 ; i < 3; i++) {
                for(int j = 0 ; j  < 3; j++) {
                    magic[i][j] = number[index++];
                }
            }
            int sum = 0;
            if(Check(magic)) {
                for(int i = 0 ; i < 3; i++) {
                    for(int j = 0 ; j  < 3; j++) {
                        sum += Math.abs(magic[i][j] - board[i][j]);
                    }
                }
                min = Math.min(min, sum);
            }
            
        } while(Next_Permutation(number, 9));
        
        System.out.println(min);
    }
}
