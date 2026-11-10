function* reverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    yield arr[i];
  }
}

const gen = reverse([10, 20, 30, 40, 50, 60]);

for (let n of arr) {
  console.log(n);
}
