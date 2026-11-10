class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
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
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  removeTarget(target) {
    if (!this.head) {
      console.log("It is empty");
      return;
    }

    let current = this.head;

    while (current && current.data !== target) {
      current = current.next;
    }

    if (!current) {
      console.log("Target not found");
      return;
    }

    let nextNode = current.next;
    let prevNode = current.prev;

    if (prevNode) {
      prevNode.next = nextNode;
    } else {
      this.head = nextNode;
    }

    if (nextNode) {
      nextNode.prev = prevNode;
    } else {
      this.tail = prevNode;
    }

    current.next = null;
    current.prev = null;
  }

  print() {
    if (!this.head) {
      console.log("It is empty");
      return;
    }

    let out = "head <=> ";
    let current = this.head;

    while (current) {
      out += `${current.data} <=> `;
      current = current.next;
    }

    console.log(out + "null");
  }
}

let dll = new DLL();

dll.addNode(10);
dll.addNode(20);
dll.addNode(40);
dll.addNode(50);

dll.print();

dll.removeTarget(20);
dll.print();
