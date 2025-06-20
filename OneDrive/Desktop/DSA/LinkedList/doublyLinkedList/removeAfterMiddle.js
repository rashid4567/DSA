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
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  RemoveAfterMiddle() {
    if (!this.head || !this.head.next) return null;
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let removeNode = slow.next;
    if (removeNode) {
      slow.next = removeNode.next;
      if (removeNode.next) {
        removeNode.next.prev = slow;
      } else {
        this.tail = slow;
      }
    }
  }
  display() {
    if (!this.head) {
      console.log("Linked list is empty");
      return;
    }
    let current = this.head;
    let out = "Head";
    while (current) {
      out += ` <-> [${current.data}] `;
      current = current.next;
    }
    console.log(`${current}`);
  }
}
let DLL = new DoublyLinkedList();
DLL.addNode(34);
DLL.addNode(35);
DLL.addNode(36);
DLL.addNode(37);
DLL.addNode(38);
DLL.addNode(39);
DLL.RemoveAfterMiddle();
DLL.display();
