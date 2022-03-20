import java.util.Scanner
import kotlin.math.*

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val num = sc.nextInt()
    
    var dp = LongArray(1001, {0})
    
    dp[0] = 0
    dp[1] = 1
    dp[2] = 3
    dp[3] = 5
    
    for(i in 4..num) {
        dp[i] = (dp[i-1] + 2*dp[i-2]) % 10007
    }
    
    println("${dp[num]}")

}

// http://boj.kr/72f421fc4b9a45aaa66502b15c0a5f80
