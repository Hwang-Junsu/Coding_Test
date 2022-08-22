import java.util.Scanner
import kotlin.math.*


var r: Int = 0
var c: Int = 0
var board = Array<CharArray>(501,{CharArray(501)})
var dx = arrayOf(-1, 0, 1, 0)
var dy = arrayOf(0, 1, 0, -1)
var danger = false

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    c = sc.nextInt()
    r = sc.nextInt()
    
    for(i in 0 until c) {
        var string = sc.next()
        for(j in 0 until r) {
            board[i][j] = string[j]
        }
    }
    
    for(i in 0 until c) {
        for(j in 0 until r) {
            if(board[i][j] == 'W') {
                make_fence(i,j)
            }
        }
    }
    
    if(danger) {
        println(0)
        return
    }
    
    println(1)
    for(i in 0 until c) {
        for(j in 0 until r) {
            print(board[i][j])
        }
        println()
    }
}



fun make_fence(x : Int, y : Int) {
    for(i in 0..3) {
        var nx = dx[i] + x
        var ny = dy[i] + y
        if(nx !in 0 until c || ny !in 0 until r) {
            continue
        }
        
        
        if(board[nx][ny] == '.') board[nx][ny] = 'D'
        if(board[nx][ny] == 'S') danger = true
        
    }
}
