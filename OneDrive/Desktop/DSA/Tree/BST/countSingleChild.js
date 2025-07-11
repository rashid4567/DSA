class Node{
    constructor(data){
        this.data =data;
        this.left = null;
        this.right =null
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return
        }
        let current = this.root;
        while(true){
            if(data === current.data){
                return
            }
            if(data < current.data){
                if(!current.left){
                    current.left = newNode;
                    return
                }
                current = current.left
            }else{
                if(!current.right){
                    current.right = newNode;
                    return
                }
                current = current.right
            }
        }
    }
    countSingle(node = this.root){
       if(!node)return 0;
       let left = this.countSingle(node.left);
       let right = this.countSingle(node.right);
       if((node.left && !node.right) || (!node.left && node.right)){
           return 1 + left + right
       }
       return left + right
    }
}
let bst = new BST();
[10, 5, 1, 7, 15, 12].forEach(x => bst.insert(x));

console.log("Nodes with exactly one child:", bst.countSingleChild()); 
