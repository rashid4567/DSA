function bubbleSortObjects(arr, key) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][key] > arr[i + 1][key]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
let users = [
  { name: "Rashid", age: 21 },
  { name: "Ajay", age: 19 },
];
console.log(bubbleSortObjects(users, "age"));
