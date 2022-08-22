import java.util.Scanner
import kotlin.math.*

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val num = sc.nextInt()
    
    var arr = Array(301, {0})
    var dp = Array(301, {0})
    
    for(i in 1..num) {
        val n = sc.nextInt()
        arr[i] = n;
    }
    
    dp[0] = 0
    dp[1] = arr[1]
    dp[2] = arr[1] + arr[2]
    
    for(j in 3..num) {
        dp[j] = max(arr[j] + arr[j-1] + dp[j-3], arr[j] + dp[j-2])
    }
    println("${dp[num]}")
}

// http://boj.kr/e9f0d39f974542299b73eae2ff5afce4
