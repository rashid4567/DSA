class node{
    constructor(data){
        this.data  =data;
        this.left = null;
        this.right = null
    }
}
class BinarySearch{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new node(data);
        if(!this.root){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(current, newNode){
        if(newNode.data < current.data){
            if(!current.left){
                current.left = newNode;
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
    search(data, node = this.root){
        if(!node)return false;
        if(data === node.data)return true;
        if(data < node.data){
            return this.search(data, node.left);
        }else{
            return this.search(data, node.right)
        }
    }
}
let bst = new BinarySearch();
[4,6,5,4,1,2,4,6].forEach(x => bst.insert(x));
console.log(bst.search(5));
console.log(bst.search(7));
console.log(bst.search(1));
console.log(bst.search(3));
console.log(bst.search(6));
