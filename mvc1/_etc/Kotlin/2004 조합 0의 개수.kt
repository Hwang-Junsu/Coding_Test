import java.util.*;
import kotlin.math.*;

fun main(args: Array<String>) {

    var sc = Scanner(System.`in`)
    var n = sc.nextLong(); var m = sc.nextLong();
    var num : Long = 2L; var tc = 0L; var fc = 0L;
    
    while(num <= n) {tc += (n/num); num *= 2}
    num = 2;
    while(num <= (n-m)) {tc -= ((n-m)/num); num *= 2}
    num = 2;
    while(num <= m) {tc -= (m/num); num *= 2}
    num = 5;
    while(num <= n) {fc += (n/num); num *= 5}
    num = 5;
    while(num <= (n-m)) {fc -= ((n-m)/num); num *= 5}
    num = 5;
    while(num <= m) {fc -= (m/num); num *= 5}
    
    print(min(tc, fc))
    
}
