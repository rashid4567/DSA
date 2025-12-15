function fibbonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibbonacci(n - 1) + fibbonacci(n - 2);
}
for (let i = 0; i <= 10; i++) {
  console.log(fibbonacci(i));
}
