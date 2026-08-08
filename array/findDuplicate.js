let arr = [1,2,3,2,4,5,1,6]

// Output:
// [2,1]


function find(arr){
  let dup = [];
  let seen = new Set();
  
  for(let n of arr){
      if(!seen.has(n)){
          seen.add(n)
      }else{
          if(!dup.includes(n)){
              dup.push(n)
          }
      }
  }
  
  return dup
    
}

console.log(find(arr))