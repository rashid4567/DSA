class Node {
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
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (data === current.data) return;

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
  findClosest(target) {
    let current = this.root;
    let closest = current.data;

    while (current) {
      if (Math.abs(current.data - target) < Math.abs(closest - target)) {
        closest = current.data;
      }
      if (target < current.data) {
        current = current.left;
      } else if (target > current.data) {
        current = current.right;
      } else {
        return current.data;
      }
    }
    return closest;
  }
}
let bst = new BST();
[10, 5, 15, 2, 7, 12, 20].forEach((x) => bst.insert(x));

console.log("Closest to 6:", bst.findClosest(6));
console.log("Closest to 13:", bst.findClosest(13));
console.log("Closest to 21:", bst.findClosest(21));
