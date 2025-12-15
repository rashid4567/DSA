// AVL Node class
class AVLNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// AVL Tree class
class AVLTree {
    constructor() {
        this.root = null;
    }

    // Public insert method
    insert(val) {
        this.root = this._insert(this.root, val);
    }

    // Helper insert with balancing
    _insert(node, val) {
        if (!node) return new AVLNode(val);

        if (val < node.val) {
            node.left = this._insert(node.left, val);
        } else if (val > node.val) {
            node.right = this._insert(node.right, val);
        } else {
            return node; // Duplicate values not allowed
        }

        // Update height
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

        // Get balance factor
        let balance = this._getBalance(node);

        // Left Left (LL)
        if (balance > 1 && val < node.left.val) {
            return this._rightRotate(node);
        }

        // Right Right (RR)
        if (balance < -1 && val > node.right.val) {
            return this._leftRotate(node);
        }

        // Left Right (LR)
        if (balance > 1 && val > node.left.val) {
            node.left = this._leftRotate(node.left);
            return this._rightRotate(node);
        }

        // Right Left (RL)
        if (balance < -1 && val < node.right.val) {
            node.right = this._rightRotate(node.right);
            return this._leftRotate(node);
        }

        return node;
    }

    // Get height of a node
    _getHeight(node) {
        return node ? node.height : 0;
    }

    // Get balance factor
    _getBalance(node) {
        return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
    }

    // Right rotation
    _rightRotate(y) {
        let x = y.left;
        let T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));
        x.height = 1 + Math.max(this._getHeight(x.left), this._getHeight(x.right));

        return x;
    }

    // Left rotation
    _leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = 1 + Math.max(this._getHeight(x.left), this._getHeight(x.right));
        y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

        return y;
    }

    // Inorder traversal
    inorderTraversal(node = this.root) {
        if (!node) return;
        this.inorderTraversal(node.left);
        console.log(node.val);
        this.inorderTraversal(node.right);
    }

    // Check if AVL balanced
    isBalanced(node = this.root) {
        if (!node) return true;
        let balance = this._getBalance(node);
        return Math.abs(balance) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
    }
}
const avl = new AVLTree();
[10, 20, 30, 40, 50, 25].forEach(x => avl.insert(x));

console.log("Inorder Traversal:");
avl.inorderTraversal();

console.log("Is tree balanced?", avl.isBalanced());
