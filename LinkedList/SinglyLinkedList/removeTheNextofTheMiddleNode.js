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
  findMiddle() {
    if (this.head === null || this.head.next === null) {
      console.log("List is too short");
      return;
    }
    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    if (slow.next) {
      slow.next = slow.next.next;
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
SLL.addNode(41);
SLL.addNode(16);
SLL.addNode(43);
SLL.addNode(44);
SLL.addNode(43);
SLL.addNode(13);
SLL.addNode(22);
SLL.findMiddle();
SLL.display();
