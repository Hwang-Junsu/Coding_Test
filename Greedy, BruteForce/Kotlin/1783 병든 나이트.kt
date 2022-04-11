import java.util.*;
import kotlin.math.*;

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var n = sc.nextInt(); var m = sc.nextInt()
    var answer: Int;
    if(n == 1) answer = 1;
    else if(n == 2) answer = min(4, ((m-1)/2)+1)
    else {
        if(m > 6) answer = m-2;
        else answer = min(4, m);
    }
    print(answer);
}
