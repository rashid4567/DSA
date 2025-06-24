class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = 0;
        this.capacity = size;
        this.loadFactor = 0.75;
    }
    hash(key){
        let hash =0;
        for(let char of key){
            hash += char.charCodeAt(0)
        }
        return hash % this.capacity;
    }
    set(key, value){
        let index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
        this.size++;
        
        if(this.size /this.capacity > this.loadFactor){
            this.rehash();
        }
    }
    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            for(let pair of bucket){
                if(pair[0] === key){
                    return pair[1]
                }
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            for(let i=0; i<bucket.length; i++){
                if(bucket[i][0] === key){
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        }
        return false;
    }
    rehash(){
        let oldTable = this.table;
        this.capacity *=2;
        this.table = new Array(this.capacity);
        this.size = 0;
        for(let bucket of oldTable){
            if(bucket){
                for(let [key, value] of bucket){
                    this.set(key, value)
                }
            }
        }
    }
    print(){
        for(let i=0; i<this.capacity; i++){
            console.log(`${i}:${JSON.stringify(this.table[i])}`)
        }
    }
}

const ht = new HashTable(4);

ht.set("apple", 100);
ht.set("banana", 200);
ht.set("grape", 300);

console.log("\nInitial Table:");
ht.print();

ht.set("kiwi", 400);  
ht.set("melon", 500);

console.log("\nAfter Rehash:");
ht.print();

console.log("\nGet values:");
console.log("banana:", ht.get("banana"));
console.log("melon:", ht.get("melon"));

ht.remove("grape");
console.log("grape (after remove):", ht.get("grape"));

console.log("\nFinal Table:");
ht.print();
