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
    findMin(node){
        while(node.left){
            node = node.left;
        }
        return node
    }
    findThesecondSmallest(){
        if(!this.root || (!this.root.left || !this.root.right))return null;
        let current = this.root;
        let parent = null;

        while(current.left){
            parent = current;
            current = current.left
        }
        if(current.left){
            this.findMin(current.left).data;
        }
        return parent.data
    }
}

let bst = new BinarySearch();
[4,5,4,4,5,6,7,1,34,6,45].forEach(x => bst.insert(x));
console.log('The second smallest element in the tree is : ',bst.findThesecondSmallest())