class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addNode(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    print() {
        let current = this.head;
        let out = "head";

        while (current) {
            out += ` ${current.data} ->`;
            current = current.next;
        }

        console.log(`${out} null`);
    }

    reverse(head = this.head) {

        if (!head || !head.next) {
            if (head === this.head) {
                this.head = head;
            }
            return head;
        }

        let newHead = this.reverse(head.next);

        head.next.next = head;
        head.next = null;

        if (head === this.head) {
            this.head = newHead;
        }

        return newHead;
    }
}

let sll = new SLL();

sll.addNode(4);
sll.addNode(5);
sll.addNode(2);
sll.addNode(8);
sll.addNode(7);

sll.print();

sll.reverse();

sll.print();