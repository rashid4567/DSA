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
  swapEvenNodes() {
    if (!this.head || !this.head.next) {
      return;
    }

    let dummy = new Node(0);
    dummy.next = this.head;

    let prev = dummy;
    while (prev.next) {
      let first = prev.next;
      if (first.data % 2 !== 0) {
        prev = first;
        continue;
      }

      let secondPrev = first;
      let second = first.next;

      while (second && second.data % 2 !== 0) {
        secondPrev = second;
        second = second.next;
      }

      if (!second) break;

      secondPrev.next = second.next;

      second.next = first;
      prev.next = second;
      prev = first;
    }

    this.head = dummy.next;
  }

  print() {
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

let ll = new SLL();

ll.addNode(5);
ll.addNode(2);
ll.addNode(7);
ll.addNode(4);
ll.addNode(9);
ll.addNode(6);
ll.print();

console.log("After swap");
ll.swapEvenNodes();
ll.print();
