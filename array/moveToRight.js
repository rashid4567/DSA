let Input= [1,2,3,4,5]
let k = 2

function rotate(arr,k){
   k = k % arr.length;
   let last = arr.splice(arr.length - k);
   return last.concat(arr)
}

console.log(rotate(Input,k))