import java.util.Scanner
import kotlin.collections.ArrayList
import java.util.*


var w: Int = 0
var h: Int = 0
var board = Array<Array<Int>>(51) {Array<Int>(51) {0}}
var visited = Array<Array<Boolean>>(51) {Array<Boolean>(51) {false}}
var dx = arrayOf(-1, -1, 0, 1, 1, 1, 0 ,-1);
var dy = arrayOf(0, 1, 1, 1, 0 ,-1, -1, -1);


fun bfs(start : Pair<Int, Int>): Boolean {

    if(board[start.first][start.second] == 0 || visited[start.first][start.second] == true) return false
    
    
    var queue = LinkedList<Pair<Int, Int>>()
    queue.add(start); visited[start.first][start.second] = true;
        
    while(queue.isEmpty() == false) {
        val v = queue.poll();
            
        for(i in 0..7) {
            var nx = dx[i] + v.first
            var ny = dy[i] + v.second
            
            if(nx < 0 || ny < 0 || nx >= h || ny >= w) continue
            if(board[nx][ny] == 1 && visited[nx][ny] == false) {
                visited[nx][ny] = true
                var ni = Pair<Int, Int>(nx, ny)
                queue.add(ni)
            }
        }
    }
    return true
}


fun init() {
    for(i in 0 until board.size) {board[i].fill(0, 0, board[i].size)}
    for(i in 0 until visited.size) {visited[i].fill(false, 0, visited[i].size)}
}


fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    
    while(true) {
        var answer = 0
        w = sc.nextInt(); h = sc.nextInt();
        
        if(w == 0 && h == 0) break
        
        for(i in 0 until h) {
            for(j in 0 until w) {
                board[i][j] = sc.nextInt()
            }
        }

        for(i in 0 until h) {
            for(j in 0 until w) {
                var index = Pair<Int, Int>(i, j)
                if(bfs(index) == true) answer += 1
            }
        }        
        
        println(answer)
        init()
    }

}
