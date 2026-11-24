function find(arr,index = 0, result = {odd : [], even : []}){
    if(arr.length === index)return result;

    if(arr[index] % 2 === 0){
        result.even.push(arr[index])
    }else{
        result.odd.push(arr[index])
    }

    return find(arr, index + 1, result )
}

console.log(find([3,4,2,1,5,6,7,8,5,6,4,9]))
