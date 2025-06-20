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
  ispalindrome(n) {
    if (n < 0) return false;
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === n) {
        console.log(
          `The position that you are searching it is in the ${current.data}`
        );
        return;
      }
      current = current.next;
      count++;
    }
  }

  display() {
    if (!this.head) {
      console.log("The linked list is empty");
      return;
    }
    let current = this.head;
    let out = "HEAD";
    while (current) {
      out += ` <-> [${current.data}] `;
      current = current.next;
    }
    console.log(` ${out} <-> NULL`);
  }
}

let DLL = new DoublyLinkedList();
DLL.addNode(34);
DLL.addNode(35);
DLL.addNode(36);
DLL.addNode(36);
DLL.addNode(35);
DLL.addNode(34);
DLL.ispalindrome(2);
DLL.display();
