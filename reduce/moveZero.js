let arr = [1, 2, 3, 0, 5, 0, 8, 9]

  function arrang(arr){
    let pos = arr.length-1;
    for(let i=arr.length-1; i>=0; i--){
      if(arr[i] !== 0){
        [arr[pos],arr[i]] = [arr[i],arr[pos]]
        pos--
      }
    }
    return arr;
  }
  console.log(arrang(arr))