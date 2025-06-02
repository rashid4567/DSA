class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  arrToList(arr) {
    if (arr.length === 0) {
      console.log("Array size is 0");
      return;
    }

    this.head = new Node(arr[0]);
    let current = this.head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next;
    }
  }

  display() {
    if (this.head === null) {
      console.log("The Linked List is empty");
      return;
    }

    let current = this.head;
    let out = "head";
    while (current !== null) {
      out += ` -> ${current.data}`;
      current = current.next;
    }
    console.log(`${out} -> null`);
  }
}

let SLL = new SinglyLinkedList();
SLL.arrToList([12, 34, 345, 56, 67, 78, 89, 56, 34, 23, 2]);
SLL.display();
