const myMap = (arr, callback) =>{
    const res = [];
    for(let i=0; i<arr.length; i++){
        res.push(callback(arr[i],i,arr))
    }
    return res
}

const arr  = [ 1,2,3,4,5,6,6];

const squared = myMap(arr,function(num){
    return num * num;
})

console.log(squared)