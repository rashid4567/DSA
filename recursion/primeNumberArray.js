function isPrime(num, divisor = 2) {
  if (num < 2) return false;
  if (divisor > Math.sqrt(num)) return true;
  if (num % divisor === 0) return false;
  return isPrime(num, divisor + 1);
}

function prime(arr, index = 0, res = []) {
  if (arr.length === index) return res;
  if (isPrime(arr[index])) {
    res.push(arr[index]);
  }
  return prime(arr, index + 1, res);
}

console.log(prime([4, 3, 2, 1, 6, 7, 8, 6, 3, 3]));
