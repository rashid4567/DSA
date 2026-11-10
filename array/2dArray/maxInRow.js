let arr = [
  [10, 20, 5],
  [30, 15, 25],
  [7, 40, 2]
];

function find(arr){
    for(let i=0; i<arr.length; i++){
        let max = arr[0][0];
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] > max){
                max = arr[i][j]
            }
        } 
        console.log(max);
    }
}

find(arr)