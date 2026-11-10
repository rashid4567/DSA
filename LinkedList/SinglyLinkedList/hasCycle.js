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

  hasCycle() {
    if (!this.head) {
      console.log("it is empty");
      return;
    }

    let fast = this.head;
    let slow = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  print() {
    if (!this.head) {
     return false;  
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
sll.addNode(5);
sll.print();

console.log("The cycle ", sll.hasCycle());
