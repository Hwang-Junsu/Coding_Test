import java.util.*

var graph = Array<ArrayList<Int>>(100001) { ArrayList() }
var visited = Array<Int>(100001) { 0 }

fun dfs(v : Int) {
    for(to in graph[v]) {
        if(visited[to] == 0) {
            visited[to] = v
            dfs(to)
        }
    }
}

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var n = sc.nextInt()
    for(i in 0 until n-1) {
        var from = sc.nextInt(); var to = sc.nextInt();
        graph[from].add(to); graph[to].add(from)
    }
    dfs(1)
    for(i in 2..n) {
        println(visited[i])
    }
    
}
