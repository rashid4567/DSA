function evenSum(arr, index = 0){
    if(index === arr.length)return 0;
    let current = arr[index] % 2 === 0 ? arr[index] : 0;
    return current + evenSum(arr, index + 1)
}

console.log(evenSum([3,2,1,5,6,7,8,9]))