class Graph{
    constructor(isDirected = false){
        this.adjList = {};
        this.isDirected = isDirected;
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set()
        }
          for(let v in this.adjList){
            if(!this.isDirected){
                this.adjList[v].add(vertex)
            }
        }
    }
    addEdges(v1, v2){
        this.addVertex(v1);
        this.addVertex(v2);

        this.adjList[v1].add(v2)
        if(this.adjList[v1]){
            this.adjList[v2].add(v1)
        }
    }
    clone(){
        let newGraph = new Graph(this.isDirected = false);
        for(let node in this.adjList){
            this.addVertex(node)
        }

        for(let node in this.adjList){
            for(let n of this.adjList[node]){
                if(this.isDirected || node < n){
                   this.addEdges(node, n)   
                }
            }
        }
        return newGraph;
    }
    print(){
        for(let n in this.adjList){
            console.log(`${v}-> ${[...this.adjList[v]].join(", ")}`)
        }
    }
}

let g = new Graph(false);
g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("B", "C");
g.addEdges("C", "A");
const clone = g.clone()
clone.print()