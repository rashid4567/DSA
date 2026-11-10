const arr = [1, 2, 3, 4, 5];
const k = 2;

// Output:
// [4, 5, 1, 2, 3]

function rotateRight(arr, k){
  k = k % arr.length;

  let part1 = arr.slice(-k);
  let part2 = arr.splice(0, arr.length-k);
  return part1.concat(part2);
}

console.log(rotateRight(arr,k));


function rotateLeft(arr,k){
    k = k % arr.length;

    let part1 = arr.slice(0,k);
    let part2 = arr.slice(k);
    return part2.concat(part1)
}

console.log(rotateLeft(arr,k))