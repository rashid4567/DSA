class DoubleHashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
    this.count = 0;
    this.DELETED = Symbol("deleted");
  }

  hash1(key) {
    let hash = 0;
    for (let char of key.toString()) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  hash2(key) {
    let hash = 0;
    for (let char of key.toString()) {
      hash += char.charCodeAt(0);
    }
    return 7 - (hash % 7);
  }

  probe(key, i) {
    return (this.hash1(key) + i * this.hash2(key)) % this.size;
  }

  set(key, value) {
    if (this.count >= this.size) {
      console.log("Hash Table is full!");
      return;
    }

    let i = 0;
    let index = this.probe(key, i);

    while (i < this.size) {
      const entry = this.table[index];
      if (entry === undefined || entry === this.DELETED) {
        this.table[index] = [key, value];
        this.count++;
        return;
      } else if (entry[0] === key) {
        this.table[index][1] = value; 
        return;
      }

      i++;
      index = this.probe(key, i);
    }
  }

  get(key) {
    let i = 0;
    let index = this.probe(key, i);

    while (i < this.size) {
      const entry = this.table[index];
      if (entry === undefined) return undefined;
      if (entry !== this.DELETED && entry[0] === key) {
        return entry[1];
      }
      i++;
      index = this.probe(key, i);
    }

    return undefined;
  }

  remove(key) {
    let i = 0;
    let index = this.probe(key, i);

    while (i < this.size) {
      const entry = this.table[index];
      if (entry === undefined) return;
      if (entry !== this.DELETED && entry[0] === key) {
        this.table[index] = this.DELETED;
        this.count--;
        return;
      }
      i++;
      index = this.probe(key, i);
    }
  }

  print() {
    this.table.forEach((item, i) => {
      if (item === this.DELETED) {
        console.log(i, "<deleted>");
      } else if (item) {
        console.log(i, item);
      } else {
        console.log(i, null);
      }
    });
  }
}
const ht = new DoubleHashTable(7);
ht.set("apple", 100);
ht.set("banana", 200);
ht.set("grape", 300);
ht.print();

console.log("Get banana:", ht.get("banana"));
ht.remove("banana");
console.log("Get banana after deletion:", ht.get("banana"));

ht.print();
