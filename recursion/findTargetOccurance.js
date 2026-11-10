let arr = [5, 2, 8, 2, 9]
let target = 2
function occurance(arr,target, index = 0){
    if(arr.length === index)return 0;
    let char = arr[index] === target ? 1 : 0;
    return char + occurance(arr, target, index + 1)    
}

console.log(occurance(arr,target))