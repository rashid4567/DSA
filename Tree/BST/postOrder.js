class Node{
    constructor(data){
        this.data    =data;
        this.left = null;
        this.right = null;
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
    postOrder(node = this.root){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data)
        }
    }
}

let BST = new BinarySearch();
BST.insert(6);
BST.insert(4);
BST.insert(8);
BST.insert(7);
BST.insert(9);
console.log("Post Order")
BST.postOrder()