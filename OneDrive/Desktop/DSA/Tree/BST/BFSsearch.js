class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (data < current.data) {
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
  bfsSearch(target) {
    if (!this.root) return false;
    let queue = [this.root];
    let front = 0;
    while (front < queue.length) {
      let node = queue[front++];

      if (node.data === target) return true;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return false;
  }
}
let bst = new BST();
[4,5,6,3,2,3,5,7].forEach(x => bst.insert(x))
console.log(bst.bfsSearch(4))