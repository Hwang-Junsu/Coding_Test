using System;
using System.Collections;


class Program
{
    int cal(int num, int _p) {
       
       int result = 0;
       int n = 0;
       while(num != 0) {
           n = num%10;
           n = (int)Math.Pow(n, _p);
           result += n;
           num = num/10;
       }
       return result;
    }
    
    static void Main() {
        string s = Console.ReadLine();
        string[] num = s.Split(" ");
        ArrayList arr = new ArrayList();
        bool[] visit = new bool[250000];
        int a = int.Parse(num[0]);
        int p = int.Parse(num[1]);
        
        arr.Add(a);
        Console.WriteLine(arr[0]);
        Console.WriteLine(cal(arr[0], p));
        
        
    }
}
