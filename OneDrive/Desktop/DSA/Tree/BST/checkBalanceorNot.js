// Node class for BST
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// BST class with insert method
class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new TreeNode(val);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
}

// ✅ Function to check if the tree is balanced
function isBalanced(root) {
    const checkHeight = (node) => {
        if (!node) return 0;

        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1;

        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight, rightHeight) + 1;
    };

    return checkHeight(root) !== -1;
}

// 🧪 Test 1: Balanced BST
const bst1 = new BST();
[10, 5, 15, 3, 7, 12, 17].forEach(val => bst1.insert(val));

console.log("Is BST1 Balanced? →", isBalanced(bst1.root)); // ✅ true

// 🧪 Test 2: Unbalanced BST
const bst2 = new BST();
[10, 20, 30, 40, 50].forEach(val => bst2.insert(val)); // Skewed tree

console.log("Is BST2 Balanced? →", isBalanced(bst2.root)); // ❌ false
