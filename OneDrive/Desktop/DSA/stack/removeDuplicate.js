class Stack{
    constructor(){
        this.Stack = [];
    }
    push(element){
        this.Stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "The stack is empty";
        }
        return this.Stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "The stack is empty";
        }
        return this.Stack[this.Stack.length-1];
    }
    isEmpty(){
        return this.Stack.length === 0
    }
    size(){
        return this.Stack.length;
    }
    print(){
        console.log(this.Stack.join(" ->"));
    }
}
function removeDuplicate(str){
    const stack = new Stack();
    
    for(let char of str){
        if(!stack.isEmpty() && stack.peek() === char){
            stack.pop()
        }else{
            stack.push(char)
        }
    }
    return stack.Stack.join(" ");
}

