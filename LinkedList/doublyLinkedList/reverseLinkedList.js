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
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  reverse() {
    if (this.head === null) {
      console.log("The list is empty");
      return;
    }

    let current = this.head;
    while (current) {
      let temp = current.next;
      current.next = current.prev;
      current.prev = temp;

      current = current.prev;
    }

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  print() {
    if (!this.head) {
      console.log("it is empty");
      return;
    }

    let out = " head <=> ";
    let current = this.head;
    while (current) {
      out += ` ${current.data} <=> `;
      current = current.next;
    }

    console.log(` ${out} tail`);
  }
}

let DLL = new DoublyLinkedList();
DLL.addNode(32);
DLL.addNode(31);
DLL.addNode(38);
DLL.addNode(37);
DLL.addNode(33);
DLL.addNode(33);
DLL.reverse();
DLL.print();
