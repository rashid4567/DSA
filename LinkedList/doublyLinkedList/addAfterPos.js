class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
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
  addAfterPos(data, pos) {
    if (!this.head) {
      console.log("it is empty");
      return;
    }

    let current = this.head;
    let count = 0;
    let newNode = new Node(data);

    while (current && count < pos) {
      current = current.next;
      count++;
    }

    if (!current) {
      console.log("The position is not in the list");
      return;
    }

    newNode.next = current.next;
    newNode.prev = current;

    if (!current.next) {
      current.next.prev = newNode;
    } else {
      this.tail = newNode;
    }
    current.next = newNode;
    console.log(`The Data added After the position ${current.data}`);
  }

  print() {
    if (!this.head) {
      console.log("it is empty");
      return;
    }

    let current = this.head;
    let out = "head <=> ";
    while (current) {
      out += ` ${current.data} <=> `;
      current = current.next;
    }
    console.log(` ${out} <=> null`);
  }
}

let dll = new DLL();
dll.addNode(5);
dll.addNode(6);
dll.addNode(3);
dll.addNode(2);
dll.addNode(2);
dll.addNode(8);
dll.addNode(9);
dll.addNode(1);
dll.print();
console.log("After adding in the pos");
dll.addAfterPos(4, 3);
dll.print();
