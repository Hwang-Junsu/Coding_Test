import java.util.*
import kotlin.math.*

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var a = sc.nextInt(); var b = sc.nextInt(); var c = sc.nextInt();
    var x = sc.nextInt(); var y = sc.nextInt(); var price = 0;
    if(a+b < 2*c) price = a*x + b*y
    else {
        if(x >= y) price = y*2*c + (x-y)*a
        else price = x*2*c + (y-x)*b
    }
    price = Math.min(price, Math.max(x,y) * c * 2)
    println(price)
}
