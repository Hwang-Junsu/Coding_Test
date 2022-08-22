import java.util.*
import kotlin.math.*


var board = Array(51) {Array(51) {0}}
var visited = Array(51) {Array<Int>(51) {0}}
var n = 0; var m = 0;
var dx = arrayOf(0,1,1,1,0,-1,-1,-1)
var dy = arrayOf(1,1,0,-1,-1,-1,0,1)

fun bfs(start : Pair<Int, Int>): Int {

    if(board[start.first][start.second] == 1) return 0
    var queue = LinkedList<Pair<Int, Int>>()
    queue.add(start); visited[start.first][start.second] = 1
    var danger = false
    var safeDistance = 0
    
    while(queue.isEmpty() == false) {
    
        var v = queue.poll()
        for(i in 0..7) {
            var nx = dx[i] + v.first; var ny = dy[i] + v.second
            if(nx < 0 || ny <0 || nx >= n || ny >= m) continue
            if(nx == start.first && ny == start.second) continue
            if(board[nx][ny] == 1) danger = true
            
            if(visited[nx][ny] == 0) {
            visited[nx][ny] = visited[v.first][v.second] + 1;
            queue.add(Pair(nx,ny))
            safeDistance = max(visited[nx][ny], safeDistance)
            }
        }
        if(danger == true) break
    
    }
    
    return safeDistance-1
}

fun init() {
    for(i in 0 until 51) {
        visited[i].fill(0, 0, visited[i].size)
    }
}


fun main(args: Array<String>) {
    var answer = 0
    var sc = Scanner(System.`in`)
    n = sc.nextInt(); m = sc.nextInt()
    
    for(i in 0 until n) {
        for(j in 0 until m) {
            board[i][j] = sc.nextInt()
        }
    }
    
    for(i in 0 until n) {
        for(j in 0 until m) {
            init()
            answer = max(answer, bfs(Pair(i,j)))
        }
    }
    print(answer)
}
