class Node{
    constructor(data){
        this.data =data;
        this.right = null;
        this.left = null;
    }
}
class BinarySearch{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
        }else{
            return this.insertNode(this.root, newNode)
        }
    }
    insertNode(current, newNode){
        if(newNode.data < current.data){
            if(!current.left){
                current.left = newNode;
            }else{
                return this.insertNode(current.left, newNode)
            }
        }else{
            if(!current.right){
                current.right = newNode
            }else{
                return this.insertNode(current.right, newNode)
            }
        }
    }
    preOrder(node = this.root){
        if(node){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right)
        }
    }
}
let BST = new BinarySearch();
BST.insert(4);
BST.insert(5);
BST.insert(8);
BST.insert(12);
BST.insert(3);
BST.insert(87);
console.log('Pre-Order');
BST.preOrder()