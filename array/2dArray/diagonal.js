let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Output: [1, 5, 9]

function printDaigonal(arr){
    let res = [];

    for(let i=0; i<arr.length; i++){
        res.push(arr[i][i])
    }

    return res;
}

console.log(printDaigonal(arr))