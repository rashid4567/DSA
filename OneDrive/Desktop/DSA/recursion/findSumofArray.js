function sum(arr, index = 0){
    if(index >= arr.length)return 0;
    let current = arr[index];
    if(current % 2 === 0){
        return current + sum(arr, index+1)
    }else{
        return sum(arr, index + 1)
    }

}
let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(sum(arr))


function recSum(n){
    if(n <= 0)return 0;
    if(n % 2=== 0){
        return n + recSum(n - 2)
    }else{
        return(n -1)
    }
}
console.log(recSum(10))