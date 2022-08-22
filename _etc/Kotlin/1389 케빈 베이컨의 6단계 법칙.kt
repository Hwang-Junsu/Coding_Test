import java.util.*
import kotlin.math.*


var graph = Array<ArrayList<Int>>(101) { ArrayList() }
var visited = Array<Int>(101) { -1 }
var answer = Array<Int>(101) { 0 }
var n = 0; var m = 0

fun bfs(start : Int) {
    
    var queue = LinkedList<Int>()
    queue.add(start); visited[start] = 0;
    
    while(queue.isEmpty() == false) {
        var v = queue.poll();
        for(to in graph[v]) {
            if(visited[to] == -1) {
                visited[to] = visited[v] + 1
                queue.add(to)
            }
        }
    
    }
}

fun init() {
    visited.fill(-1, 0, visited.size)
}


fun main(args: Array<String>) {
    var min_value = 5001
    var sc = Scanner(System.`in`)
    n = sc.nextInt(); m = sc.nextInt()
    
    for(i in 0 until m) {
        var from = sc.nextInt(); var to = sc.nextInt()
        graph[from].add(to); graph[to].add(from)
    }
    
    for(i in 1..n) {
        bfs(i)
        var sum = 0
        for(j in 1..n) {
            sum += visited[j]
        }
        
        answer[i] = sum
        min_value = min(min_value, sum)
        
        init()
    }
    print(answer.indexOf(min_value))
    
}
