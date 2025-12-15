const myFilter = (arr, callback) =>{
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}

let arr = [4,3,2,1,6,7,8];
const filtered = myFilter(arr,function(num){
    return num % 2 === 0
})

console.log(filtered)