// Node class representing a single tree node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Optimized Binary Tree class without using shift()
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];
        let front = 0;

        while (front < queue.length) {
            const current = queue[front++];

            if (!current.left) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }

            if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }

    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node = this.root) {
        if (node) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node = this.root) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    levelOrder() {
        if (!this.root) return;

        const queue = [this.root];
        let front = 0;

        while (front < queue.length) {
            const node = queue[front++];
            console.log(node.data);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}


const tree = new BinaryTree();

// Insert nodes
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

// Display traversals
console.log("Inorder Traversal:");
tree.inorder();

console.log("\nPreorder Traversal:");
tree.preorder();

console.log("\nPostorder Traversal:");
tree.postorder();

console.log("\nLevel Order Traversal:");
tree.levelOrder();
