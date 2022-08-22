using System;
using static System.Console;

class Program
{
    static void Main() {
        string s = ReadLine();
        char[] temp = s.ToCharArray();
        Array.Sort(temp); Array.Reverse(temp);
        
        if(temp[temp.Length-1] == '0') {
            int sum = 0;
            for(int i = 0 ; i < temp.Length-1; i++) {
                sum += temp[i] - '0';
            }
            
            if(sum % 3 == 0)  {
                WriteLine(string.Join("", temp));
            } else {
                WriteLine("-1");
            }
        }
        else {
            WriteLine("-1");
        }
    }
}
