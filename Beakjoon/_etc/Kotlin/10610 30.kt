import java.util.*;

fun main(args: Array<String>) {
    
    var sc = Scanner(System.`in`)
    var s = sc.nextLine().split("").sorted().reversed().joinToString("")
    var sum = 0;
    if(s[s.length - 1] != '0') print(-1)
    else {
        for(i in 0 until s.length-1) {
            sum += s[i] - '0';
        }
        if(sum % 3 == 0) print(s);
        else print(-1);
    }

}
