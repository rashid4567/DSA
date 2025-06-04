function sum(arr, index = 0) {
  if (index >= arr.length) return 0;
  let current = arr[index];
  if (current % 2 === 0) {
    return current + sum(arr, index + 1);
  } else {
    return sum(arr, index + 1);
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(arr));

function recSum(n) {
  if (n <= 0) return 0;
  if (n % 2 === 0) {
    return n + recSum(n - 2);
  } else {
    return n - 1;
  }
}
console.log(recSum(10));

function arrSum(arr, index = 0) {
  if (index > arr.length) return 0;
  return arr[index] + arrSum(arr, index + 1);
}
let number = [23, 34, 23, 2, 534, 232, 35];
console.log(sum(number));

function sum(n) {
  if (n === 0) return false;
  return n + sum(n - 1);
}
console.log(sum(5));
