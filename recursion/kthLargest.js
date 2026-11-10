function kthLargest(arr, k) {
  if (k === 1) return Math.max(...arr);

  let max = Math.max(...arr);
  let index = arr.indexOf(max);

  arr.splice(index, 1);

  return kthLargest(arr, k - 1);
}

console.log(kthLargest([10, 5, 8, 20, 15], 2));
