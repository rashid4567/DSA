class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "The Stack is empty";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "The stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    return this.stack.size;
  }
  print() {
    console.log(this.stack.join(" ->"));
  }
}

function reverse(str) {
  let stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}
console.log(reverse("hello"));
