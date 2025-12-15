class Graph{
    constructor(isDirected = false){
        this.adjList = {};
        this.isDirected = isDirected
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set()
        }
    }
    addEdges(v1,v2){
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjList[v1].add(v2);
        if(!this.isDirected){
            this.adjList[v2].add(v1)
        }
    }
    clone(){
        let newGraph = new Graph(this.isDirected);
        for(let node in this.adjList){
            newGraph.addVertex(node);
        }
        
        for(let node in this.adjList){
            for(let n of this.adjList[node]){
                if(this.isDirected || node < n){
                    newGraph.addEdges(node, n)
                }
            }
        }
        return newGraph
    }
    print(){
        for(let vertex in this.adjList){
            console.log(`${vertex}->${[...this.adjList[vertex]].join(", ")}`)
        }
    }
}


let g = new Graph(false);
g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("B", "C");
g.addEdges("C", "A");

const clone = g.clone();
clone.print();