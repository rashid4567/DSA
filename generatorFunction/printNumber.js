function* number(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

const gen = number(10);

for (let n of gen) {
  console.log(n);
}
