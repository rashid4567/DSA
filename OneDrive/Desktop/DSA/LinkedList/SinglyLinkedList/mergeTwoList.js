class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
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
  display() {
    if (!this.head) {
      console.log("the linked list is empty");
      return;
    }
    let current = this.head;
    let out = " HEAD";
    while (current) {
      out += `→ [${current.data}]`;
      current = current.next;
    }
    console.log(`${out} →  NULL`);
  }

  merged(list1, list2) {
    let dummy = new Node(-1);
    let current = dummy;
    while (list1 && list2) {
      if (list1.data < list2.data) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
    current.next = list1 || list2;
    return dummy.next;
  }
}
let first1 = new LinkedList();
first1.addNode(12);
first1.addNode(13);
first1.addNode(14);
first1.addNode(15);
first1.addNode(16);

console.log("Displayed first one :-");
first1.display();

let second = new LinkedList();
second.addNode(34);
second.addNode(35);
second.addNode(36);
second.addNode(37);
second.addNode(38);
second.addNode(39);

console.log("Displyed the second One :-");
second.display();

console.log("After merged :-");
let merged = first1.merged(first1.head, second.head);
let mergedList = new LinkedList();
mergedList.head = merged;
mergedList.display();
