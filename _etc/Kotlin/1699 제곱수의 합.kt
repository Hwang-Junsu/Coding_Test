import java.util.Scanner
import kotlin.math.*

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val n = sc.nextInt()
    var dp = Array(100000){0}
    
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3
    
    for(i in 4..n) {
        if((((i.toDouble().pow(0.5)).toInt()).toDouble().pow(2)).toInt() == i) dp[i] = 1
        
        else {
            dp[i] = dp[i-1] + 1
            var j = 1
            while(i > j*j) {
                dp[i] = min(dp[i], dp[i-j*j] + dp[j*j])
                j += 1
            }
        }
    }
    
    println(dp[n])
}

//http://boj.kr/6118174733b2410ebe63b370167ebd06
