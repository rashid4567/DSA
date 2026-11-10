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
function removePointer(pos) {
  if(!this.head){
    console.log("The list is empty");
    return;
  }

  if(pos < 0){
    console.log("Invalid position");
    return;
  }

  if(pos === 0){
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  let count = 0;
  while(current && count < pos - 1){
    current = current.next;
    count++;
  }

  if(!current || !current.next){
    console.log(`Invalid position`);
    return;
  }

  current.next = current.next.next;    
}
function display() {
  if (head === null) {
    console.log("Linked list is empty");
    return;
  }
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

addNode(23);
addNode(21);
addNode(52);
addNode(31);
removePointer(2);
display();
