// Node class representing a single tree node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Tree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert node level by level (left to right)
    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

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

    // Inorder: Left → Root → Right
    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // Preorder: Root → Left → Right
    preorder(node = this.root) {
        if (node) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Postorder: Left → Right → Root
    postorder(node = this.root) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    // Level Order: Top to bottom, left to right
    levelOrder() {
        if (!this.root) return;
        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();
            console.log(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}
