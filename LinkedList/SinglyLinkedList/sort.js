class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }
  addNode(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  sort() {
    if (!this.head) {
      console.log("it is empty");
      return;
    }

    let current = this.head;
    while (current) {
      let nextNode = current.next;

      while (nextNode) {
        if (nextNode.data < current.data) {
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

    let out = " head -> ";
    let current = this.head;

    while (current) {
      out += ` ${current.data} -> `;
      current = current.next;
    }

    console.log(` ${out} -> null`);
  }
}

let sll = new SLL();
sll.addNode(5);
sll.addNode(2);
sll.addNode(1);
sll.addNode(8);
sll.addNode(7);
sll.addNode(5);
sll.addNode(6);
sll.print();

console.log("\nSorted");
sll.sort();
sll.print();
