class Stack {
  constructor(data) {
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
  print() {
    console.log(this.Stack.join(" ->"));
  }
}

function isBalanced(expression) {
  let stack = new Stack();
  let pairs = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  for (let char of expression) {
    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    } else if (char === "}" || char === ")" || char === "]") {
      if (stack.isEmpty() || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log(isBalanced("({[]})"));
console.log(isBalanced("({[})"));
