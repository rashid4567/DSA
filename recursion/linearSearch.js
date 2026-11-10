function linearSearch(arr, target, index = 0){
    if(arr.length === index)return -1;
    if(arr[index] === target){
        return index;
    }
    return linearSearch(arr, target, index + 1)
}

console.log(linearSearch([5,4,3,2,6,7,8,9],7));
