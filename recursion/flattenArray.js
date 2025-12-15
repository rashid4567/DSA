function flatten(arr){
    let res = [];
    for(let item of arr){
        if(Array.isArray(item)){
            res = res.concat(flatten(item))
        }else{
            res.push(item)
        }
    }
    return res;
}

console.log(flatten([1, [2, [3, 4], 5], [6, 7]]))


//without creating new array

function flatten(arr, index = 0){
  if(arr.length === index)return arr;
  
  if(Array.isArray(arr[index])){
    arr.splice(index, 1, ...arr[index])
    return flatten(arr, index)
  }else{
    return flatten(arr, index + 1)
  }
}

console.log(flatten([3,4,2,[4,5,[3,2,4],5],2,4,[4,3]]))