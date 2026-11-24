let arr = [1, 2, 3, 4, 5];

// Output: [2, 3, 4, 5, 1]


function find(arr){
    let first = arr[0];

    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i + 1];
    }

    arr[arr.length-1] = first;
    return arr;
}

console.log(find(arr));


//rotate one right to side
// Output: [5, 1, 2, 3, 4]

function rotate(arr){
  let last = arr[arr.length-1];
  for(let i=arr.length; i>=0; i--){
    arr[i] = arr[i - 1]
  }
  arr[0] = last;
  return arr
}

console.log(rotate(arr))