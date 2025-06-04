function remove(arr, index=0){
    if(index >= arr.length) return [];
    let rest = remove(arr, index +1)
    if(arr[index] % 2 !== 0){
        return [arr[index], ...rest]
    }else{
        return rest
    }
}
let arr = [12,23,34,45,56,67,78,89,90];
console.log(remove(arr))