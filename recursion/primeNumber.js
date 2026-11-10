function isPrime(num, divisor = 2) {
  if (num < 2) return false;
  if (divisor > Math.sqrt(num)) return true;
  if (num % 2 === 0) return false;
  return isPrime(num, divisor + 1);
}

function printPrime(n, current = 2) {
  if (current > n) return;
  if (isPrime(current)) {
    console.log(current);
  }
  printPrime(n, current + 1);
}

printPrime(30);

