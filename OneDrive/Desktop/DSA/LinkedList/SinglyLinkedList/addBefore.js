class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  addNode(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  addBefore(data, target) {
    if (this.head === null) return;
    if (this.head.data === target) {
      let newNode = new Node(data);
      newNode.next = current.next;
      current.next = newNode;
      return;
    }
    let current = this.head;
    let prev = null;
    while (current !== null && current.data !== target) {
      prev = current;
      current = current.next;
    }
    if (current === null) {
      console.log("The linked list is empty");
      return;
    }
    let newNode = new Node(data);
    prev.next = newNode;
    newNode.next = current;
  }
  display() {
    if (this.head === null) {
      console.log("The linked list is empty");
      return;
    }
    let current = this.head;
    let out = `HEAD `;
    while (current !== null) {
      out += ` -> ${current.data} `;
      current = current.next;
    }
    console.log(` ${out} -> NULL`);
  }
}

let SLL = new SinglyLinkedList();
SLL.addNode(33);
SLL.addNode(34);
SLL.addNode(35);
SLL.addNode(36);
SLL.addNode(37);
SLL.addNode(38);
SLL.addNode(39);
SLL.addNode(40);
SLL.addBefore(111, 35);
SLL.display();
