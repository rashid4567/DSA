class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addNode(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = this.tail = newNode;
      return;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  findMiddle() {
    if (this.head === null) return null;

    let fast = this.head;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(`The middle of the linked list is ${slow.data}`);
  }
  display() {
    if (this.head === null) {
      console.log("The linked list is empty");
      return;
    }
    let current = this.head;
    let out = "HEAD";
    while (current !== null) {
      out += `<-> [${current.data}]`;
      current = current.next;
    }
    console.log(` ${out} <-> NULL`);
  }
}
let DLL = new DoublyLinkedList();
DLL.addNode(23);
DLL.addNode(24);
DLL.addNode(25);
DLL.addNode(26);
DLL.addNode(25);
DLL.addNode(27);
DLL.addNode(24);
DLL.addNode(22);
DLL.addNode(21);
DLL.findMiddle();
DLL.display();
