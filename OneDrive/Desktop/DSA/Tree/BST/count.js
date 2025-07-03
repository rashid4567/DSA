class node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearch{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new node(data)
        if(!this.root){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(current, newNode){
        if(newNode.data < current.data){
            if(!current.left){
                current.left = newNode
            }else{
                 this.insertNode(current.left, newNode)
            }
        }else{
            if(!current.right){
                current.right = newNode;
            }else{
                this.insertNode(current.right, newNode)
            }
        }   
    }
    countNodes(node = this.root){
        if(!node)return 0;
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
}

let bst = new BinarySearch();
[4,5,4,4,5,6,7,1,34,6,45].forEach(x => bst.insert(x));
console.log('count ',bst.countNodes())
