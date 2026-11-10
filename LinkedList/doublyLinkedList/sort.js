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
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  sort() {
    if (!this.head || !this.head.next) {
      console.log("it is empty");
      return;
    }

    let current = this.head;
    while (current) {
      let nextNode = current.next;

      while (nextNode) {
        if (current.data > nextNode.data) {
          let temp = current.data;
          current.data = nextNode.data;
          nextNode.data = temp;
        }
        nextNode = nextNode.next;
      }
      current = current.next;
    }
  }

  print() {
    if (!this.head) {
      console.log("it is empty");
      return;
    }

    let current = this.head;
    let out = " HEAD <=> ";
    while (current) {
      out += ` ${current.data} <=> `;
      current = current.next;
    }

    console.log(` ${out} <=> null`);
  }
}

let dll = new DLL();
dll.addNode(5);
dll.addNode(2);
dll.addNode(1);
dll.addNode(8);
dll.addNode(7);
dll.addNode(5);
dll.addNode(6);
dll.print();

console.log("\nSorted");
dll.sort();
dll.print();
