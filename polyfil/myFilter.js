let arr = [1,2,3,4,5,6,7];

Array.prototype.myFilter = function(callback){
    let res = [];

    for(let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            res.push(this[i])
        }
    }

    return res;
}

const result = arr.myFilter((val)=>{
    return val % 2 === 0;
});

console.log(result);