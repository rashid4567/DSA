function* evenElement(arr) {
  let e = 0;
  for (let value of arr) {
    if (value % 2 === 0) {
      e += value;
    }
  }

  yield e;
}

const gen = evenElement([
  4, 3, 2, 1, 6, 7, 8, 9, 7, 4, 3, 22, 11, 33, 44, 5, 7,
]);

console.log(gen.next().value);
