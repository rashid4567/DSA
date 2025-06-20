class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
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
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  removeallocurance(data) {
    while (this.head && this.head.data === data) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
        return;
      }
    }

    let current = this.head;
    while (current) {
      if (current.data === data) {
        let prevNode = current.prev;
        let nextNode = current.next;
        if (prevNode) prevNode.next = nextNode;
        if (nextNode) nextNode.prev = prevNode;
        if (current === this.tail) this.tail = prevNode;
      }
      current = current.next;
    }
  }

  display() {
    if (this.head === null) {
      console.log("Linked list is empty");
      return;
    }
    let current = this.head;
    let out = "head -->";
    while (current !== null) {
      out += ` [${current.data}] <-->`;
      current = current.next;
    }
    out += " null";
    console.log(out);
  }
}

let DDL = new DoublyLinkedList();
DDL.addNode(25);
DDL.addNode(24);
DDL.addNode(23);
DDL.addNode(22);
DDL.addNode(25);
DDL.removeallocurance(25);
DDL.display();
