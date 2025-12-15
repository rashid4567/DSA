// this function will remove all the element it will appere more than one

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
  print() {
    console.log(this.Stack.join(" ->"));
  }
}
function removeAllDuplicates(str) {
  const stack = new Stack();
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] === 1) {
      stack.push(char);
    }
  }
  return stack.Stack.join("");
}

console.log(removeAllDuplicates("Hello"));
console.log(removeAllDuplicates("madam"));
