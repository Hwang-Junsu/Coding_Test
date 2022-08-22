using System;
using System.Linq;
using static System.Console;

class Program
{
    static void Main() {
        int[] hei = new int[9];
        for(int i= 0; i < 9; i++) {
            string s = ReadLine();
            hei[i] = int.Parse(s);
        }
        int sum = 0; int lier1 = 0; int lier2 = 0;
        Array.Sort(hei);
        for(int i = 0 ; i < 9; i++) {
            for(int j = i+1; j < 9; j++) {
                sum = hei.Sum() - hei[i] - hei[j];
                if(sum == 100) {
                    lier1 = i; lier2 = j;
                    break;
                }
            }
        }
        
        for(int i = 0 ; i < 9; i++) {
            if(i == lier1 || i == lier2) continue;
            WriteLine(hei[i]);
        }
        
        
    }
}
