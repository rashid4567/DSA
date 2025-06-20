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
  nthToEnd(n) {
    if (this.head === null || n <= 0) {
      console.log("Invalid input or list is empty");
      return;
    }
    let fast = this.head;
    let slow = this.head;
    for (let i = 0; i < n; i++) {
      if (fast === null) {
        console.log("The item is not in the list");
        return;
      }
      fast = fast.next;
    }
    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }
    console.log(`The ${n}th position of the linked list is ${slow.data}`);
    let out = `After the ${n}th to end :`;
    while (slow !== null) {
      out += ` -> ${slow.data}`;
      slow = slow.next;
    }
    console.log(`${out} -> NUll`);
  }
  display() {
    if (this.head === null) {
      console.log("THe list is empty");
      return;
    }
    let current = this.head;
    let out = "HEAD";
    while (current !== null) {
      out += ` -> ${current.data} `;
      current = current.next;
    }
    console.log(`${out} -> NULL`);
  }
}
let SLL = new SinglyLinkedList();
SLL.addNode(34);
SLL.addNode(35);
SLL.addNode(36);
SLL.addNode(37);
SLL.addNode(38);
SLL.addNode(39);
SLL.nthToEnd(3);
SLL.display();
