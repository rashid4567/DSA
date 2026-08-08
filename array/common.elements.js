const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];


function find(arr1, arr2){
   let set = new Set(arr2);
   
   return arr1.filter((x)=> set.has(x))
}

console.log(find(arr1,arr2))