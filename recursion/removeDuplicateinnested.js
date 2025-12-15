function removeDup(arr, seen = new Set()){
  if(arr.length === 0)return [];
  let res = []
  for(let n of arr){
    if(Array.isArray(n)){
      res.push(removeDup(n, seen))
    
    }else{
      if(!seen.has(n)){
        seen.add(n);
        res.push(n)
      }
    }
  }
  return res
}
console.log(removeDup([1, 2, [3, 2, [4, 1, 5]], 3, 6, [6, 7]]));