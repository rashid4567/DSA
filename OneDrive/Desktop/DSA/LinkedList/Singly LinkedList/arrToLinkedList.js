class Node{
    constructor(data){
         this.data = data;
         this.next = null;
    }
}
function toLinkedList(arr){
    if(arr.length === 0) return false;
    let head = new Node(arr[0]);
    let current = head;
    for(let i=1; i<arr.length; i++){
     current.next = new Node(arr[i]);
     current = current.next;
    }
    return head;
}
function display(head){
    if(head === null)return false;
    let current = head;
    let out = 'head'
    while(current !== null){
        out += `-> ${current.data}`
        current = current.next
    }
    console.log(`${out}-> null`)
}

let head = toLinkedList([12,34,56,67,78,89,34,12])
display(head)