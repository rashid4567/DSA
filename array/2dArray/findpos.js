let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

function find(arr,target){
    for(let i=0; i<arr.length; i++){
      for(let j = 0; j<arr[0].length; j++){
        if(arr[i][j] === target){
          return [i,j]
        }
      }
    }
    return [-1, -1];
}

console.log(find(arr,60))