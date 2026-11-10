const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const k = 3;

function reverse(arr,k){
    let res = [];

    for(let i=0; i<arr.length; i+=k){
        for(let j = Math.min(i + k - 1, arr.length-1); j>=i; j--){
            res.push(arr[j]);
        }
    }

    return res;
}

console.log(reverse(arr, k))