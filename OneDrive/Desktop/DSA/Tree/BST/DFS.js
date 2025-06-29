class node{
    constructor(data){
        this.data =data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new node(data);
        if(!this.root){
            this.root = newNode;
            return
        }
        let current = this.root;
        while(true){
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
    inOrder(node = this.root){
        if(!node)return;
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
    preOrder(node = this.root){
        if(!node)return;
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right)
    }
    postOrder(node = this.root){
        if(!node)return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }
}


const tree = new BST();

[1, 2, 3, 4, 5, 6, 7].forEach(num => tree.insert(num));

console.log("Preorder (DFS):");
tree.preOrder(); 

console.log("\nInorder (DFS):");
tree.inOrder();

console.log("\nPostorder (DFS):");
tree.postOrder(); 
