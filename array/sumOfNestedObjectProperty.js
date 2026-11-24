let arr = { a: { a: 2, b: 4 }, b: { a: 32, b: 2 }, c: { a: 12, b: 23 } };

function find(obj) {
  return Object.values(obj).reduce((acc, curr) => acc + curr.a, 0);
}
console.log(find(arr));
