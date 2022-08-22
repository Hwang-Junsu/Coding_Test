using System;
using System.Collections.Generic;


class Program
{
    static int Cal(int num, int _p) {
       
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
        List<int> arr = new List<int>();
        int a = int.Parse(num[0]);
        int p = int.Parse(num[1]);
        int check = -1;
        int answer = 0;
        arr.Add(a);
        
        while(true) {
            int value = Cal(arr[arr.Count-1],p);
            
            if(arr.Contains(value)) {
                check = value;
                break;
            }
            else arr.Add(value);
            
        }
        
        
        answer = arr.FindIndex(element => element == check);
        Console.WriteLine(answer);
    }
}
