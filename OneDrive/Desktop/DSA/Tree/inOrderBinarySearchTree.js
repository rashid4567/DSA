class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BynarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Node(data);
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
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right)
        }
    }
}
let BST = new BynarySearchTree();
BST.insert(45);
BST.insert(15);
BST.insert(35);
BST.insert(25);
BST.insert(5);
console.log("inOrder :- ");
BST.inOrder()