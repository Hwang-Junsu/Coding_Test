import java.util.*;
import kotlin.math.*;

fun findDigit(number : Int) : Int {
    var result = 0; var n = number
    while(n > 0) {
        n /= 10
        result += 1
    }
    return result
}

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var n = sc.nextInt(); var ten = 10f;
    var answer = 0; var d = findDigit(n); var temp = n;
    var v = 0;
    while(temp >= 10) {temp/= 10};
    var f = temp; var e  = n % (ten.pow(d-1).toInt())
    for(i in 1 until d) {v += (i * (ten.pow(i-1)).toInt()) * 9}
    answer = v + ((d* (ten.pow(d-1)).toInt())) * (f-1) + (e+1)*d

    print(answer)
}
