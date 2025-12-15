function insertionSort(str) {
  str = str.split(" ");
  for (let i = 1; i < str.length; i++) {
    let current = str[i];
    let j = i - 1;
    while (j >= 0 && str[j].slice(-1) > current.slice(-1)) {
      str[j + 1] = str[j];
      j--;
    }
    str[j + 1] = current;
  }
  return str.join(" ");
}
let str = "apple bannana oranage pineapple guvua";
console.log(insertionSort(str));
