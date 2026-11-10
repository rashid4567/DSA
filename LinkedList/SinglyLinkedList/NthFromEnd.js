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

  NthFromEnd(n) {
    if (!this.head) {
      console.log("it is empty");
      return;
    }

    if (!Number.isInteger(n) || n <= 0) {
      console.log("Invalid n");
      return;
    }

    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < n; i++) {
      if (!fast) return null;

      fast = fast.next;
    }

    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.data;
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

    console.log(` ${out} null `);
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
sll.NthFromEnd(5);
sll.display();
