import java.util.*;
import kotlin.math.*;

fun isPrime(number : Int) : Boolean {
    if(number == 1) return false
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
        if(n == 0) break;
        
        var j = n
        for(i in 1..n-1) {
            j = n-i;
            if(isPrime(i) && isPrime(j)) {
                println("%d = %d + %d".format(i+j, i, j));
                break;
            }
        }
        if(j == 0) println("Goldbach's conjecture is wrong.")
        
    }
    
}
