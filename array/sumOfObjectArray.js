let arr = [
  { a: 3, b: 2 },
  { a: 23, b: 23, c: 3 },
  { a: 9, b: 12, c: 4 },
];

function total(arr) {
  return arr.reduce((a, b) => {
    return a + Object.values(b).reduce((t, v) => t + v, 0);
  }, 0);
}

console.log(total(arr));

//Total of only the a

function find(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr.a;
  }, 0);
}

console.log(find(arr));
