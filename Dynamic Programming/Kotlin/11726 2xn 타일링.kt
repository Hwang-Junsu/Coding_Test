import java.util.Scanner
import kotlin.math.*

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val num = sc.nextInt()
    
    var dp = LongArray(1001, {0})
    
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3
    
    for(i in 4..num) {
        dp[i] = (dp[i-1] + dp[i-2]) % 10007
    }
    
    println("${dp[num]}")

}

// http://boj.kr/67b7c599a4af4274afd983bdd8143b5f
