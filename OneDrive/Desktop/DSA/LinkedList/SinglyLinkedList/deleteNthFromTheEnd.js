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
  deleteNthFromEnd(n) {
    if (!this.head) return;
    let dummy = new Node(0);
    dummy.next = this.head;
    let slow = dummy;
    let fast = dummy;
    for (let i = 0; i <= n; i++) {
      if (fast === null) {
        console.log("n is larger than the length of the list");
        return;
      }
      fast = fast.next;
    }
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next
    this.head = dummy.next;
  }

  display() {
    if (this.head === null) {
      console.log("Linked list is empty");
      return;
    }
    let current = this.head;
    let out = "HEAD";
    while (current !== null) {
      out += ` -> ${current.data}`;
      current = current.next;
    }
    out += " -> NULL";
    console.log(out);
  }
}


let SLL = new SinglyLinkedList();
SLL.addNode(10);
SLL.addNode(20);
SLL.addNode(30);
SLL.addNode(40);
SLL.addNode(50);

console.log("Original list:");
SLL.display();

SLL.deleteNthFromEnd(2);

console.log("After deleting 2nd node from end:");
SLL.display();
