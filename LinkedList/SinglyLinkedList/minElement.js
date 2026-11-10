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

  MinimumElement() {
    if (!this.head) {
      console.log("it is empty");
      return;
    }

    let min = this.head.data;
    let current = this.head.next;

    while (current) {
      if (current.data < min) {
        mid = current.data;
      }

      current = current.next;
    }

    console.log(` The smallest element is ${min}`);
  }

  display() {
    if (!this.head) {
      console.log("it is empty");
      return;
    }

    let current = this.head;
    let out = " head -> ";
    while (current) {
      out += ` ${current.data} -> `;
      current = current.next;
    }

    console.log(` ${out} -> null `);
  }
}

let sll = new SLL();
sll.addNode(22);
sll.addNode(21);
sll.addNode(12);
sll.addNode(43);
sll.addNode(41);
sll.addNode(16);
sll.addNode(43);
sll.addNode(44);
sll.addNode(43);
sll.addNode(13);
sll.addNode(22);
sll.display();
console.log("The smallest element \n");
sll.MaxElement();
