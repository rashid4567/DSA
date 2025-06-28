class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearch {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(current, newNode) {
    if (newNode.data < current.data) {
      if (!current.left) {
        current.left = newNode;
      } else {
        this.insertNode(current.left, newNode);
      }
    } else {
      if (!current.right) {
        current.right = newNode;
      } else {
        this.insertNode(current.right, newNode);
      }
    }
  }
  kthLargest(k) {
    let count = 0;
    let result = null;

    const inOrder = (node) => {
      if (!node || result !== null) return;
      inOrder(node.right);
      count++;
      if (count === k) {
        result = node.data;
        return;
      }
      inOrder(node.left);
    };
    inOrder(this.root);
    return result !== null ? result : "Not enough nodes"
  }
}

let bst = new BinarySearch();
[3, 4, 5, 4, 2, 4, 5, 6, 5, 4, 22, 5].forEach((x) => bst.insert(x));
console.log("kth largest :- ", bst.kthLargest(3));
