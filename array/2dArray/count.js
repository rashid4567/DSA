let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function find(arr,target){
  let count = 0
    for(let i=0; i<arr.length; i++){
      for(let j = 0 ; j < arr[0].length; j++){
        if(arr[i][j] % 2 === 0){
          count++
        }
      }
    }
  return count;
}

console.log(find(arr,60)) 