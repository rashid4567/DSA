class Graph{
    constructor(isDirected){
        this.adjList = {};
        this.isDirected = isDirected;
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]= new Set();
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
    hasCycle(){
        let visited = {};
        let reStack = {};

        const dfsCycle = (node) =>{
            if(reStack[node])return true;
            if(visited[node])return false;

            reStack[node] = true;
            visited[node] = true;

            for(let n of this.adjList[node]){
                if(dfsCycle(n))return true
            }
                reStack[node] = false;
                return false;
        }
        for(let node in this.adjList){
            if(dfsCycle(node))return true
        }
        return false 
    }
}

    const g = new Graph(true);

    g.addEdge("A", "B");
    g.addEdge("A", "C");
    g.addEdge("B", "D");
    g.addEdge("C", "D");
    g.addEdge("D", "A"); 
    console.log(`\n🌀 Cycle Present? ${g.hasCycle() ? "Yes" : "No"}`);