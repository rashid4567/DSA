class Stack {
  constructor() {
    this.Stack = [];
  }
  push(element) {
    this.Stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "The stack is empty";
    }
    return this.Stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "The stack is empty";
    }
    return this.Stack[this.Stack.length - 1];
  }
  isEmpty() {
    return this.Stack.length === 0;
  }
  size() {
    return this.Stack.length;
  }
  print() {
    console.log(this.Stack.join(" ->"));
  }
}

function removeTarget(stack, target) {
  if (stack.isEmpty()) return;

  let top = stack.pop();
  removeTarget(stack, target);
  if (top !== target) {
    stack.push(top);
  }
}
let stack = new Stack();
[1, 2, 3, 4, 5, 6, 7].forEach((x) => stack.push(x));
let target = 3;
removeTarget(stack, target);
stack.print();
