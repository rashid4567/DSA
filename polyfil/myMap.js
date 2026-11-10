let arr = [1,2,3,4];

Array.prototype.myMap = function(callback){
    let res = [];
    for(let i=0; i<this.length; i++){
        res.push(callback(this[i],i,this))
    }

    return res;
}

const result = arr.myMap((val)=>{
    return val * 2;
})

console.log(result);