let arr = [10, 5, 20, 8, 20, 15];
//→ 15

function secondLargest(
  arr,
  index = 0,
  largest = -Infinity,
  second = -Infinity,
) {
  if (arr.length === index) return second;

  if (arr[index] > largest) {
    second = largest;
    largest = arr[index];
  } else if (arr[index] > second && arr[index] !== largest) {
    second = arr[index];
  }

  return secondLargest(arr, index + 1, largest, second);
}

console.log(secondLargest(arr));
