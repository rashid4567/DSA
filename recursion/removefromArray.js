function remove(arr,target){
   if(arr.length === 0)return [];
   const [first , ...rest] = arr;
   const filter = remove(rest, target);
   if(first === target){
       return filter
   }else{
       return [first, ...filter]
   }
}
console.log(remove([4,3,2,1,6,7,8,98],6))