class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class BT{
    constructor(){
        this.root = null
    }
    insert(data){
        let newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return
        }
        let queue = [this.root];
        let front = 0;
        while(front < queue.length){
            let current = queue[front++];
            if(!current.left){
                current.left = newNode;
                return
            }else{
                queue.push(current.left)
            }
            if(!current.right){
                current.right = newNode;
                return
            }else{
                queue.push(current.right)
            }
        }
    }
   findMax(node = this.root){
       if(!node)return -Infinity;
       let left = this.findMax(node.left);
       let right = this.findMax(node.right);
       return Math.max(node.data, left, right)
   }
   findMin(node = this.root){
       if(!node)return Infinity;
       let left = this.findMin(node.left);
       let right = this.findMin(node.right)
       return Math.min(node.data, left, right)
   }
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            console.log(node.data)
            this.inOrder(node.right)
        }
    }
}


let bt = new BT();
bt.insert(4);
bt.insert(3);
bt.insert(2);
bt.insert(1);
bt.insert(7);
bt.insert(9);
console.log("largest value :- ",bt.findMax())
console.log("minimum value :- ", bt.findMin())
bt.inOrder()