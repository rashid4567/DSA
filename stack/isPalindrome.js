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
            return "The stack is empty"
        };
        return this.Stack[this.Stack.length-1];
    }
    isEmpty(){
        return this.Stack.length === 0;
    }
    print(){
        console.log(this.Stack.join(' ->'))
    }
}
function isPalindrome(str){
    const stack = new Stack();
    let mid = Math.floor(str.length/2);
    for(let i=0; i<mid; i++){
        stack.push(str[i])
    }
    let compareIndex = str.length % 2 === 0 ? mid : mid+1;
    for(let i=compareIndex; i<str.length; i++){
        if(str[i] !== stack.pop())return false;
    }
    return true;
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("madam"));