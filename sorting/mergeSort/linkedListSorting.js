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
      console.log("The linked list is empty");
      return;
    }
    let current = this.head;
    let out = "HEAD";
    while (current) {
      out += ` -> ${current.data}`;
      current = current.next;
    }
    console.log(` ${out} ->`);
  }
  mergeSort(head = this.head) {
    if (!head || !head.next) return head;

    const mid = this.getMid(head);
    const right = mid.next;
    mid.next = null;

    const leftSorted = this.mergeSort(head);
    const rightSorted = this.mergeSort(right);
    return this.merge(leftSorted, rightSorted);
  }
  getMid(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  merge(left, right) {
    let dummy = new Node(-1);
    let tail = dummy;
    while (left && right) {
      if (left.data < right.data) {
        tail.next = left;
        left = left.next;
      } else {
        tail.next = right;
        right = right.next;
      }
      tail = tail.next;
    }
    tail.next = left || right;
    return dummy.next;
  }
  sort() {
    this.head = this.mergeSort(this.head);
  }
}

  let list = new LinkedList();
  list.addNode(5);
  list.addNode(1);
  list.addNode(3);
  list.addNode(-2);
  list.addNode(4);

  console.log("Before Sorting:"); 
  list.display();

  list.sort();

  console.log("After Sorting:");
  list.display();
