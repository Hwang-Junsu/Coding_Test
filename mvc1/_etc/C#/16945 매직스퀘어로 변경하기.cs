using System;
using static System.Console;
using System.Collections.Generic;


class Program
{
    
    static void Swap(ref int x, ref int y) {
         int temp = 0;
         temp = x;
         x = y;
         y = temp;
    }
    static bool Next_Permutation(int[] arr, int end) {
        int i = end-1;
        while(i > 0 && arr[i] <= arr[i-1]) --i;
            
        if(i == 0) return false;
            
        int j = end-1;
        while(arr[i-1] >= arr[j]) j -= 1;
        Swap(ref arr[i-1], ref arr[j]);
        j = end-1;
        while(i < j) {
            Swap(ref arr[i], ref arr[j]);
            i += 1; j-= 1;
        }
        return true;
    }
    static bool Check(int[,] arr) {
        
        int num = 15;
        if(arr[0,0] + arr[0,1] + arr[0,2] != num) return false;
        if(arr[1,0] + arr[1,1] + arr[1,2] != num) return false;
        if(arr[2,0] + arr[2,1] + arr[2,2] != num) return false;
        if(arr[0,0] + arr[1,0] + arr[2,0] != num) return false;
        if(arr[0,1] + arr[1,1] + arr[2,1] != num) return false;
        if(arr[0,2] + arr[1,2] + arr[2,2] != num) return false;
        if(arr[0,0] + arr[1,1] + arr[2,2] != num) return false;
        if(arr[0,2] + arr[1,1] + arr[2,0] != num) return false;
        
        return true;
        
    }

    static void Main() {

        int[,] square = new int[3,3];
        int[] number = new int[9] {1,2,3,4,5,6,7,8,9};
        int min = 100000;
        for(int i = 0;  i < 3; i++) {
            string[] row = ReadLine().Split(' ');
            for(int j = 0; j < 3; j++) {
                square[i,j] = int.Parse(row[j]);
            }
        }
        
    
        do {
            int[,] magic = new int[3,3];
            int index = 0;
            for(int i = 0 ; i < 3; i++) {
                for(int j = 0 ; j < 3; j++) {
                    magic[i,j] = number[index++];
                }
            }
            int sum = 0;
            if(Check(magic)) {
                for(int i = 0 ; i < 3; i++) {
                    for(int j = 0; j < 3; j++) {
                        sum += Math.Abs(magic[i,j] - square[i,j]);
                    }
                }
                min = Math.Min(min, sum);
            }
            
        } while(Next_Permutation(number, 9));
        
        WriteLine(min);
    }
}
