class GraphMatrix{
    constructor(vertices){
        this.vertices = vertices;
        this.size = vertices.length;
        this.adjMatrix = Array.from({length : this.size}, ()=> Array(this.size).fill(0))
    }
    addEdge(v1,v2){
        let i = this.vertices.indexOf(v1);
        let j = this.vertices.indexOf(v2);
        
        if(i === -1 || j === -1)return 
        this.adjMatrix[i][j] = 1;
        this.adjMatrix[j][i] = 1;
    }
    printMatrix(){
        console.log(" "+ this.vertices.join(" "));
        for(let i=0; i<this.size; i++){
            console.log(this.vertices[i] + " " + this.adjMatrix[i].join(" "))
        }
    }
}

const g = new GraphMatrix(['A', 'B', 'C', 'D']);
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');

g.printMatrix();