class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addNode(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  display() {
    if (!this.head) {
      console.log("The linked list is empty");
      return;
    }
    let current = this.head;
    let out = "HEAD";
    while (current) {
      out += ` -> [${current.data}] `;
      current = current.next;
    }
    console.log(` ${out} -> NULL`);
  }
  bubbleSort() {
    if (!this.head && !this.head.next) return null;

    let swapped;
    do {
      swapped = false;
      let current = this.head;
      while (current && current.next) {
        if (current.data > current.next.data) {
          let temp = current.data;
          current.data = current.next.data;
          current.next.data = temp;
          swapped = true;
        }
        current = current.next;
      }
    } while (swapped);
  }
}

let LL = new LinkedList();
LL.addNode(25);
LL.addNode(22);
LL.addNode(21);
LL.addNode(23);
LL.addNode(26);
LL.addNode(24);

console.log("Before sorting :- ");
LL.display();

LL.bubbleSort();
console.log("After sorting :- ");
LL.display();
