class Stack{
    constructor(){
        this.Stack = [];
    }
    push(element){
        this.Stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return 'The stack is empty';
        }
        return this.Stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "The stack is empty";
        }
        return this.Stack[this.Stack.length-1]
    }
    isEmpty(){
       return this.Stack.length === 0;
    }
    size(){
        return this.Stack.length;
    }
    print(){
        console.log(this.Stack.join(' ->'))
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.print();

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size())
stack.print()