class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let hash = 0;
        key = String(key);
        for(let char of key){
            hash += char.charCodeAt(0)
        }
        return hash % this.size;
    }
    set(key, value){
        let index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair[1] = value;
                return 
            }
        }
        this.table[index].push([key, value])
    }
    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            for(let [k,v] of bucket){
                if(k === key){
                    return v;
                }
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
          this.table[index] = bucket.filter(([k,v])=> k !== key)
        }
    }
    print(){
        this.table.forEach((bucket, i)=>{
            if(bucket){
                console.log(i, bucket)
            }
        })
    }
}
let HT = new HashTable(10);
HT.set("name","Rashid");
HT.set("age",21);
HT.set("place","mananthavady");
HT.print()
console.log(HT.get("age"));

HT.print()