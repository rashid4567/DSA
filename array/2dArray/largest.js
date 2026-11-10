let arr = [
  [10, 5, 8],
  [20, 3, 15],
  [7, 25, 2]
];

function largest(arr){
    let max = arr[0][0];

    for(let i=0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] > max){
                max = arr[i][j];
            }
        }
    }
    return max;
}
console.log(largest(arr))