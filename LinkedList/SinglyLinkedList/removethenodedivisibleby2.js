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
  removemultipleof2() {
    while (this.head !== null && this.head.data % 2 == 0) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.data % 2 === 0) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
  display() {
    if (this.head == null) {
      console.log("Linked list is empty");
    }
    let current = this.head;
    let out = "head ";
    while (current !== null) {
      out += `-> ${current.data}`;
      current = current.next;
    }
    console.log(`${out} -> null`);
  }
}

let SLL = new SinglyLinkedList();
SLL.addNode(22);
SLL.addNode(21);
SLL.addNode(12);
SLL.addNode(43);
SLL.addNode(16);
SLL.removemultipleof2();
SLL.display();
