class Graph{
    constructor(isDirected = true){
        this.adjList = {};
        this.isDirected = isDirected;
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set()
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
    print(){
        for(let vertex in this.adjList){
            console.log(`${vertex}-> ${[...this.adjList[vertex]].join(", ")}`)
        }
    }
}
const g = new Graph(true);
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");
g.addEdge("C", "A")
g.print()