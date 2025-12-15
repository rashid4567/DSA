class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }
  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    let head = this.table[index];
    while (head) {
      if (head.key === key) {
        head.value = value;
        return;
      }
      head = head.next;
    }
    let newNode = new Node(key, value, this.table[index]);
    this.table[index] = newNode;
  }
  get(key) {
    let index = this.hash(key);
    let head = this.table[index];
    while (head) {
      if (head.key === key) {
        return head.value;
      }
      head = head.next;
    }
    return undefined;
  }
  remove(key) {
    let index = this.hash(key);
    let head = this.table[index];
    let prev = null;
    while (head) {
      if (head.key === key) {
        if (prev) {
          prev.next = head.next;
        } else {
          this.table[index] = head.next;
        }
        return true;
      }
      prev = head;
      head = head.next;
    }
    return false;
  }
  print() {
    this.table.forEach((node, index) => {
      let list = "";
      while (node) {
        list += `${node.key}:${node.value}`;
        node = node.next;
      }
      console.log(`${index}:${list || "empty"}`);
    });
  }
}
const ht = new HashTable(5);

ht.set("apple", 10);
ht.set("banana", 20);
ht.set("grape", 30);
ht.set("papaya", 40);
ht.set("lemon", 50);

ht.print();

console.log("Get grape:", ht.get("grape"));
ht.remove("banana");
console.log("After removing banana:");
ht.print();
