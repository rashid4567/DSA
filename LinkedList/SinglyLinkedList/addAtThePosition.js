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
function addAttheposition(data, pos) {
  let newNode = new Node(data);
  if (pos === 0) {
    newNode.next = head;
    head = newNode;
    return;
  }
  let current = head;
  let count = 1;
  while (current !== null && count <= pos - 1) {
    current = current.next;
    count++;
  }
  if (current !== null) {
    newNode.next = current.next;
    current.next = newNode;
  }
}
function display() {
  if (head === null) {
    console.log("Linked list is empty");
    return;
  }
  let current = head;
  let out = "head";
  while (current !== null) {
    out += `-> ${current.data}`;
    current = current.next;
  }
  console.log(out + "-> null");
}

addNode(23);
addNode(21);
addNode(54);
addNode(12);
addAttheposition(222, 2);
display();
