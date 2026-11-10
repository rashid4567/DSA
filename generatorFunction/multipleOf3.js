function* multipleOfThree(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      yield i;
    }
  }
}

const gen = multipleOfThree(10);

for (let n of gen) {
  console.log(n);
}
