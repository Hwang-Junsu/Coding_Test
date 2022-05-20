import java.util.*;
import kotlin.math.*;

fun isPrime(number : Int) : Boolean {
    if(number % 2 == 0) return false
    for(i in 3..Math.pow(number.toDouble(), 0.5).toInt()) {
        if(number % i == 0) return false
    }
    return true

}

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    while(true) {
        var n = sc.nextInt();
        if(n == 1) {println(1); continue;}
        if(n == 0) break;
        var count = 0;
        for(i in n+1..(2*n)) {if(isPrime(i)) count++}
        println(count)
    }
    
}
