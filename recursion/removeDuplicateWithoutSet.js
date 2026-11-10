function removeDuplicate(arr, index = 0, res = []) {
  if (arr.length === index) return res;

  if (!res.includes(arr[index])) {
    res.push(arr[index]);
  }

  return removeDuplicate(arr, index + 1, res);
}

console.log(
  removeDuplicate([4, 3, 2, 2, 1, 4, 3, 2, 1, 4, 5, 6, 7, 6, 7, 8, 9]),
);
