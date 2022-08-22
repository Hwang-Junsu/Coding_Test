import java.util.Scanner
import kotlin.math.*


var p: Int = 0

fun cal(num : Int):Int {
    
    var n : Int = num
    var result = 0;
    while(n != 0) {
        var temp = 0
        temp = (n%10.toFloat()).pow(p).toInt()
        result += temp
        n = n/10
    }
    return result
}


fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var a = sc.nextInt()
    p = sc.nextInt()
    var check = -1
    
    var arr = arrayListOf<Int>(a)
    
    while(true) {
        var value = cal(arr[arr.size-1])
        
        if(arr.contains(value)) {
            check = value
            break
        }
        arr.add(value)
    }
    
    println(arr.indexOf(check))
}
