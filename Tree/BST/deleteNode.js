class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(data){
        let newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return
        }
        let current = this.root;
        while(true){
            if(current.data === data)return;
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
    deleteNode(data){
        const deletes = (node, data) =>{
            if(!node)return null;
            if(data < node.data){
                node.left = deletes(node.left,data);
            }else if(data > node.data){
                node.right = deletes(node.right,data)
            }else{
                if(!node.left && !node.right){
                    return null
                }
                if(!node.left)return node.right;
                if(!node.right)return node.left
                let succes = node.right;
                while(succes.left)succes = succes.right
                node.data = succes.data;
                node.right = deletes(node.right, succes.data)
            }
            return node
        }
        this.root = deletes(this.root,data)
    }
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right)
        }
    }
}


let bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);
bst.inOrder()
bst.deleteNode(70);
console.log("\nafter delete \n")
bst.inOrder()