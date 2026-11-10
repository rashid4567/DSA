function* squares(n) {
  for (let i = 1; i <= n; i++) {
    yield i * i;
  }
}

const gen = squares(10);

for (let n of gen) {
  console.log(n);
}
