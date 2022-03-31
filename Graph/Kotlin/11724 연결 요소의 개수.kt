import java.util.*

var graph = Array<ArrayList<Int>>(1001) { ArrayList() }
var visited = Array<Boolean>(1001) { false }

fun bfs(start : Int) : Boolean {
    if(visited[start] == true) return false
    var queue = LinkedList<Int>()
    queue.add(start); visited[start] = true
    
    while(queue.isEmpty() == false) {
        var v = queue.poll();
        for(to in graph[v]) {
            if(visited[to] == false) {
                visited[to] = true; queue.add(to)
            }
        }
    }
    return true
}

fun main(args: Array<String>) {
    var answer = 0
    var sc = Scanner(System.`in`)
    var n = sc.nextInt(); var m = sc.nextInt();
    while(m-- > 0) {
        var from = sc.nextInt(); var to = sc.nextInt();
        graph[from].add(to); graph[to].add(from)
    }
    
    for(i in 1..n) {if(bfs(i) == true) answer+=1 }
    print(answer)
}
