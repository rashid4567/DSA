class Graph{
    constructor(isDirected){
        this.adjList = {};
        this.isDirected = isDirected;
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set();
        }
    }
    addEdge(v1, v2){
        this.addVertex(v1);
        this.addVertex(v2);
        
        this.adjList[v1].add(v2);
        if(!this.isDirected){
            this.adjList[v2].add(v1)
        }
    }
    dfs(start, visited = new Set()){
        if(!this.adjList[start])return;
        visited.add(start);
        console.log(start);
        for(let n of this.adjList[start]){
            if(!visited.has(n)){
                this.dfs(n, visited)
            }
        }
    }
 printGraph(){
     for(let vertex in this.adjList){
         console.log(`${vertex}->${[...this.adjList[vertex]].join(",")}`)
     }
 }
}

const g = new Graph(false); 

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("D", "E");

console.log("🌐 Original Graph:");
g.printGraph();

console.log("\n🔍 DFS Traversal from A:");
g.dfs("A");

