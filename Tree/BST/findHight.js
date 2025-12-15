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
  findHight(node = this.root){
    if(!node)return -1;
    let leftHeight = this.findHight(node.left);
    let rightHeight = this.findHight(node.right);
    return 1 + Math.max(leftHeight, rightHeight)
  }
}

let bst = new BinarySearch();
[3, 4, 5, 4, 2, 4, 4, 6, 5, 4, 22, 5].forEach((x) => bst.insert(x));
console.log("hight of the node :- ", bst.findHight());
