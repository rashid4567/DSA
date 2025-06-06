class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head = null;
function addNode(data) {
  let newNode = new Node(data);
  if (head === null) {
    head = newNode;
    return;
  }
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
}
function reverseNode() {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  head = prev;
}
function display() {
  if (head === null) {
    console.log("The Linked List is empty");
    return;
  }
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

addNode(23);
addNode(43);
addNode(65);
addNode(76);
reverseNode();
display();
