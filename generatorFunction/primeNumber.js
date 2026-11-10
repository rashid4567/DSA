function* primeNumber(n) {
  for (let num = 2; num <= n; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      yield num;
    }
  }
}

const gen = primeNumber(20);

for (let n of gen) {
  console.log(n);
}
